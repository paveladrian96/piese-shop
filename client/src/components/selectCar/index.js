import React from 'react'
import { Container, Title, StepsColumn, StepsRow, StepsText, StepsImg, Select, Option, Button } from "./styles/selectCar"

export default function SelectCar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container> 
}

SelectCar.Title = function SelectCarTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

SelectCar.StepsRow = function SelectCarStepsRow({children, ...restProps}){
    return <StepsRow {...restProps}>{children}</StepsRow>
}

SelectCar.StepsColumn = function SelectCarStepsColumn({children, ...restProps}){
    return <StepsColumn {...restProps}>{children}</StepsColumn>
}

SelectCar.StepsImg = function SelectCarStepsImg({children, invert=.2, ...restProps}){
    return <StepsImg invert={invert} { ...restProps}>{children}</StepsImg>
}

SelectCar.StepsText = function SelectCarStepsText({children, ...restProps}){
    return <StepsText {...restProps}>{children}</StepsText>
}

SelectCar.Select = function SelectCarSelect({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
}

SelectCar.Option = function SelectCarOption({children, ...restProps}){
    return <Option {...restProps}>{children}</Option>
}

SelectCar.Button = function SelectButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

