import React, {useState, useEffect} from "react"
import { isAutheticated} from "../../apiFunctions/auth"
import { listOrders, getStatusValues, updateOrderStatus } from "../../apiFunctions/adminManager"
import { Orders } from "../../components"
import moment from "moment"

export function OrdersContainer() {

    const [orders, setOrders] = useState([])
    const [statusValues, setStatusValues] = useState([])

    const {user, token} = isAutheticated()

    const loadOrders = () => {
        listOrders(user._id, token)
            .then(data => {
                if(data.error) {
                    console.log(data.error)
                } else {
                    setOrders(data)
                    console.log(data)
                }
            })
    }

    const loadStatusValues = () => {
        getStatusValues(user._id, token)
            .then(data => {
                if(data.error) {
                    console.log(data.error)
                } else {
                    setStatusValues(data)
                }
            })
    }

    useEffect(()=> {
        loadOrders()
        loadStatusValues()
    },[])

    const showOrdersLength = () => {
        if(orders.length > 0) {
            return (
                <Orders.Title>
                    Total comenzi: {orders.length}
                </Orders.Title>
            ) 
        } else { return(
            <Orders.Title>
                Nu exista nicio comanda
            </Orders.Title>)
        }
    }

    const showInput = (key, value) => (
        <Orders.ProdusInfo>{key}: {value}</Orders.ProdusInfo>
    )

    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, orderId, e.target.value)
            .then(data => {
                if(data.error) {
                    console.log("Status update faile")
                } else {
                    loadOrders()
                }
            })
    }

    const showStatus = order => (
        <div className="form-group">
            <h3 className="mark mb-4">Status: {order.status}</h3>
            <select onChange={(e) => handleStatusChange(e, order._id)} className="form-control">
                <option>Update Status</option>
                {statusValues.map((status, i)=>(
                        <option key={i} value={status}>
                            {status}
                        </option>
                ))}

            </select>
        </div>
    )


    return(
        <Orders>
            {showOrdersLength()}
            {orders.map((order, i) => (
                <Orders.Comanda key={i}>
                    <Orders.ComandaTitle>
                        ID Comanda: {order._id}
                    </Orders.ComandaTitle>
                    {showStatus(order)}
                    <Orders.ComandaInfo>ID Tranzactie: {order.transaction_id}</Orders.ComandaInfo>
                    <Orders.ComandaInfo>Valoarea comenzii: {order.amount} RON</Orders.ComandaInfo>
                    <Orders.ComandaInfo>Comandat de: {order.user.nume}</Orders.ComandaInfo>
                    <Orders.ComandaInfo>Comandata pe data: {moment(order.createdAt).fromNow()}</Orders.ComandaInfo>
                    <Orders.ComandaInfo>Adresa de livrare: {order.adresa}</Orders.ComandaInfo>
                    <Orders.Produs>
                        <Orders.ProdusTitle>Total piese: {order.products.length} </Orders.ProdusTitle>
                        {order.products.map((p, index)=> (
                            <Orders.ProdusContainer key={index}>
                                        {showInput('Numele piesei', p.nume)}
                                        {showInput('Pretul piesei', p.pret)}
                                        {showInput('Numarul pieselor', p.count)}
                                        {showInput('ID Piesa auto', p._id)}
                            </Orders.ProdusContainer>
                        ))}
                    </Orders.Produs>
                </Orders.Comanda>
            ))}
        </Orders>
    )

}