import React from "react"

import {Container, Left, Right, Card, Subtitle, Link, Paragraph, Content, Title} from "./styles/user"

export default function User({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

User.Content = function UseContent({children, ...restProps}){
    return <Content {...restProps}>{children}</Content>
}

User.Left = function UseLeft({children, ...restProps}){
    return <Left {...restProps}>{children}</Left>
}

User.Right = function UserRight({children, ...restProps}){
    return <Right {...restProps}>{children}</Right>
}

User.Card = function UserCard({children, ...restProps}){
    return <Card {...restProps}>{children}</Card>
}

User.Title = function UserTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

User.Subtitle = function UserSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

User.Paragraph = function UserParagraph({children, ...restProps}){
    return <Paragraph {...restProps}>{children}</Paragraph>
}

User.Link = function UserLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}