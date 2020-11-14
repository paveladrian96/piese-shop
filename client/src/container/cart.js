import React, {useEffect, useState} from  "react"
import {getCart, updateItem, removeItem} from "../apiFunctions/cartHelpers"
import { Cart } from "../components"
import ShowImage from "../utils/ShowImage"
import Checkout from "./checkout"



export function CartContainer ({run, setRun}){
    const [items, setItems] = useState([])
    
    useEffect(()=>{
        setItems(getCart())
    },[run])

    const handleClick = pieseId => {
        removeItem(pieseId)
        setRun(!run)
    }

    const handleChange = productId => event => {
        setRun(!run) //run useEffect in parent Cart
        if(event.target.value >= 1) {
            updateItem(productId, event.target.value)
        }
    }

    return(
        <Cart>
            <Cart.Header>
                <Cart.Articol>
                    Articol
                </Cart.Articol>
                <Cart.Info>
                    Pret
                </Cart.Info>
                <Cart.Info>
                    Cantitate
                </Cart.Info>
                <Cart.Info>
                    Cost
                </Cart.Info>
            </Cart.Header>
            
            {items && items.map((piesa, i) => (
            <Cart.Content>
                <Cart.Articol>
                    <Cart.Button src={require("../images/logos/close.png")} onClick={() =>handleClick(piesa._id)}/>

                    <Cart.Img>
                        <ShowImage dimension = {'50px'} item={piesa} url="subtipPieseAuto"/>
                    </Cart.Img>
                    <Cart.Name>
                        {piesa.distribuitor} {piesa.nume}
                    </Cart.Name>
                    
                </Cart.Articol>
                <Cart.Info>
                    {piesa.pret} RON
                </Cart.Info>
                <Cart.Info>
                    <Cart.Count type="number"  onChange={handleChange(piesa._id)}
                        value={piesa.count}/>
                </Cart.Info>
                <Cart.Info>
                    {piesa.pret * piesa.count} RON
                </Cart.Info>
            </Cart.Content>
            ))}
            <Cart.ContentPayment>
                <Cart.PaymentInfo>
                    <Cart.ParagraphBig>
                        Veți primi 9,71 RON în puncte bonus în 7 zile la achiziționarea acestor produse 
                    </Cart.ParagraphBig>
                    <Cart.ParagraphSmall>
                        Achitați până la 12% din valoarea comenzii dumneavoastră cu bonusurile acumulate.
                    </Cart.ParagraphSmall>
                </Cart.PaymentInfo>
                <Cart.Payment>
                    <Checkout products={items} run={run} setRun={setRun} />
                </Cart.Payment>
            </Cart.ContentPayment>
        </Cart>
       
    )
}