import React from "react"
import { Container, Title, Articol, Info, Content, Header, Count, Name,
    Img, Button, ContentPayment, Payment, PaymentInfo, ParagraphBig, ParagraphSmall} from "./styles/cart"

export default function Cart({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Cart.Title = function CartTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Cart.Articol = function CartArticol({children, ...restProps}){
    return <Articol {...restProps}>{children}</Articol>
}

Cart.Info = function CartInfo({children, ...restProps}){
    return <Info {...restProps}>{children}</Info>
}

Cart.Content = function CartContent({children, ...restProps}){
    return <Content {...restProps}>{children}</Content>
}

Cart.Header = function CartHeader({children, ...restProps}){
    return <Header {...restProps}>{children}</Header>
} 

Cart.Count = function CartCount({children, ...restProps}){
    return <Count {...restProps}>{children}</Count>
} 

Cart.Name = function CartName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
} 

Cart.Img = function CartImg({children, ...restProps}){
    return <Img {...restProps}>{children}</Img>
} 

Cart.Button = function CartButton({children, src, ...restProps}){
    return <Button {...restProps}>{src && <img src={src} alt="Login"/>} {children}</Button>
} 

Cart.ContentPayment = function CartContentPayment({children, ...restProps}){
    return <ContentPayment {...restProps}> {children}</ContentPayment>
} 

Cart.Payment = function CartPayment({children, ...restProps}){
    return <Payment {...restProps}> {children}</Payment>
} 

Cart.PaymentInfo = function CartPaymentInfo({children, ...restProps}){
    return <PaymentInfo {...restProps}> {children}</PaymentInfo>
} 

Cart.ParagraphBig = function CartParagraphBig({children, ...restProps}){
    return <ParagraphBig {...restProps}> {children}</ParagraphBig>
} 

Cart.ParagraphSmall = function CartParagraphSmall({children, ...restProps}){
    return <ParagraphSmall {...restProps}> {children}</ParagraphSmall>
} 
