import React from "react"

import {Container, Info, Manager, Title, InfoList, InfoListItem, Button, ButtonColumn, ButtonRow} from "./styles/admin"

export default function Admin({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Admin.Info = function AdminInfo({children, ...restProps}){
    return <Info {...restProps}>{children}</Info>
}

Admin.Manager = function AdminManager({children, ...restProps}){
    return <Manager {...restProps}>{children}</Manager>
}

Admin.Title = function AdminTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Admin.InfoList = function AdminInfoList({children, ...restProps}){
    return <InfoList {...restProps}>{children}</InfoList>
}

Admin.InfoListItem = function AdminInfoListItem({children, ...restProps}){
    return <InfoListItem {...restProps}>{children}</InfoListItem>
}

Admin.ButtonRow = function AdminButtonRow({children, ...restProps}){
    return <ButtonRow {...restProps}>{children}</ButtonRow>
}

Admin.ButtonColumn = function AdminButtonColumn({children, ...restProps}){
    return <ButtonColumn {...restProps}>{children}</ButtonColumn>
}

Admin.Button = function AdminButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}