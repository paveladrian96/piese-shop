import React from "react"
import { Container, Left, Right, Content} from "./styles/mainHome"

export default function MainHome({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

MainHome.Content = function MainHomeContent({children, ...restProps}){
    return <Content {...restProps}>{children}</Content>
}

MainHome.Left = function MainHomeLeft({children, ...restProps}){
    return <Left {...restProps}>{children}</Left>
}

MainHome.Right = function MainHomeRight({children, ...restProps}){
    return <Right {...restProps}>{children}</Right>
}
