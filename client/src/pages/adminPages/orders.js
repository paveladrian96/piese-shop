import React from 'react'
import { OrdersContainer } from '../../container/adminContainers/orders'
import { HeaderContainer } from "../../container/header"

export default function Orders() {
    return (
        <>
            <HeaderContainer />
            <OrdersContainer />
        </>
    )
}