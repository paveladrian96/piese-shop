import React from "react"
import { Container, Title, Comanda, ComandaTitle, ProdusInfo, ComandaInfo, Produs, ProdusTitle,
        ProdusContainer } from "./styles/orders"

export default function Orders({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Orders.Title = function OrdersTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Orders.Comanda = function OrdersComanda({children, ...restProps}){
    return <Comanda {...restProps}>{children}</Comanda>
}

Orders.ComandaTitle = function OrdersComandaTitle({children, ...restProps}){
    return <ComandaTitle {...restProps}>{children}</ComandaTitle>
}

Orders.ComandaInfo = function OrdersComandaInfo({children, ...restProps}){
    return <ComandaInfo {...restProps}>{children}</ComandaInfo>
}

Orders.Produs = function OrdersProdus({children, ...restProps}){
    return <Produs {...restProps}>{children}</Produs>
}

Orders.ProdusContainer = function OrdersProdusContainer({children, ...restProps}){
    return <ProdusContainer {...restProps}>{children}</ProdusContainer>
}

Orders.ProdusTitle = function OrdersProdusTitle({children, ...restProps}){
    return <ProdusTitle {...restProps}>{children}</ProdusTitle>
}

Orders.ProdusInfo = function OrdersProdusInfo({children, ...restProps}){
    return <ProdusInfo {...restProps}>{children}</ProdusInfo>
}