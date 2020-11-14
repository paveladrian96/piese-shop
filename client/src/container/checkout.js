import React, {useState, useEffect} from "react"
import { getBraintreeClienToken, processPayment, createOrder } from "../apiFunctions/getProducts"
import {isAutheticated} from "../apiFunctions/auth"
import {Link} from "react-router-dom"
import DropIn from "braintree-web-drop-in-react"
import {emptyCart} from "../apiFunctions/cartHelpers"

const Checkout = ({products, run, setRun}) => {
    const [data, setData] = useState({
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        adresa: ''
    })

    const [pret, setPret] = useState(0)

    const userId = isAutheticated() && isAutheticated().user._id
    const token = isAutheticated() && isAutheticated().token

    const getToken = (userId, token) => {
        getBraintreeClienToken(userId, token)
            .then(data => {
                if(data.error) {
                    setData({...data, error: data.error})
                } else {
                    setData({ clientToken: data.clientToken})
                }
            })
    }

    useEffect(() => {
        getToken(userId, token)
    }, [])

    useEffect(() =>{
        getTotal()
     },[products])

    const getTotal = () => {
        let pretCalculat = 0
        products.map((item) => {
            pretCalculat +=item.pret*item.count
            console.log(item.count)
        })
        setPret(pretCalculat)
    }

    const showCheckout = () => {
        return isAutheticated() ? (
            <div >{showDropIn()}</div>
        ): (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        )
    }
    const handleAddress = event => {
        setData({...data, adresa: event.target.value})
    }

    let deliveryAdress = data.adresa

    const buy = () => {
        //send the nonce to your server
        //nonce = data.instance.requestPaymentMethod()
        let nonce
        let getNonce = data.instance
            .requestPaymentMethod()
            .then(data => {
                //console.log(data)
                nonce = data.nonce
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: pret
                }

                processPayment(userId, token, paymentData)
                    .then(response => {
                        console.log(response)
                        // empty cart
                        // create order
                        const createOrderData = {
                            products: products,
                            transaction_id: response.transaction.id,
                            amount: response.transaction.amount,
                            adresa: deliveryAdress
                        }

                        createOrder(userId, token, createOrderData)
                            .then(response => {
                                setData({...data, success:true})
                        
                                emptyCart(()=> {
                                    setRun(!run)
                                })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setData({...data, error: error.message})
            })
    }

    const showDropIn = () => {
        return (
            <div onBlur={()=>setData({...data, error: ''})}>
                {data.clientToken !== null && products.length > 0 ? (
                    <div>
                        <div >
                            <label className="text-muted">Delivery address</label>
                            <textarea 
                                onChange={handleAddress}
                                className="form-control"
                                value={data.adresa}
                                placeholder="Type your delivery address here..."
                            />
                        </div>
                        <DropIn
                            options={{
                                authorization: data.clientToken,
                                paypal: {
                                    flow: "vault"
                                }
                            }} onInstance={instance => (data.instance = instance)}
                         />
                         <button onClick={buy} className="btn btn-success btn-block">Pay</button>
                    </div>
                ) : null}
            </div>
        )
    }

    const showError = error => {
        return(
            <div className="alert alert-danger" style={{display: error ? '' : "none"}}>
                {error}
            </div>
        )
    }

    const showSuccess = success => {
        return(
            <div className="alert alert-info" style={{display: success ? '' : "none"}}>
                Thank you! Your payment was successfull!
            </div>
        )
    }


    return (
        <div>
            <h2>Total: {pret} RON</h2>
            {showError(data.error)}
            {showSuccess(data.success)}
            {showCheckout()}
        </div>
    )

}

export default Checkout