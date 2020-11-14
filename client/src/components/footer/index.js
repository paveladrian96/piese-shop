import React from "react"
import { Container, Title, Link, Copyright, Row, Column, Subtitle, InternalRoute,
        SuportInfo } from "./styles/footer"
import { Link as ReachRouterLink } from "react-router-dom"
import { FooterContainer } from "../../container/footer"

export default function Footer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Footer.Copyright = function FooterCopyright({children, ...restProps}){
    return <Copyright {...restProps}>{children}</Copyright>
}

Footer.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>
}

Footer.Subtitle = function FooterSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Footer.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.InternalRoute = function FooterInteralRoute({children, ...restProps}){
    return (
            <InternalRoute {...restProps}>{children}</InternalRoute> 
    )
}

Footer.SuportInfo = function FooterSuportInfo({children, ...restProps}){
    return <SuportInfo {...restProps}>{children}</SuportInfo>
}