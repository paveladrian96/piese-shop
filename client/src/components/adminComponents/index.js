import React from "react"

import {Container, Title, Label, Input, Form, Submit, Select, Option} from "./styles.js/adminComponents"

export default function Add({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Add.Title = function AddTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Add.Label = function AddLabel({children, ...restProps}){
    return <Label {...restProps}>{children}</Label>
}

Add.Input = function AddInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Add.Form = function AddForm({children, ...restProps}){
    return <Form {...restProps}>{children}</Form>
}

Add.Submit = function AddSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
} 

Add.Select = function AddSelect({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
} 

Add.Option = function AddOption({children, ...restProps}){
    return <Option {...restProps}>{children}</Option>
} 

