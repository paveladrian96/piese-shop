import React, {useState, useContext, createContext} from "react"
import {Container, 
        Signin, 
        Signup, Subtitle, 
        Paragraph, 
        SignupButton, 
        Input, 
        Label, 
        SignupForm, 
        Submit,
        Subheader,
        Section,
        LoginForm,
        Alert
    } from "./styles/register"

const ToggleContext = createContext();

export default function Register({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Register.Signup = function RegisterSignup({children, ...restProps}){

    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Signup {...restProps}>{children}</Signup>
        </ToggleContext.Provider>
        
    )
}

Register.Signin = function RegisterSignin({children, ...restProps}){
    return <Signin {...restProps}>{children}</Signin>
}

Register.Subtitle = function RegisterSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Register.Paragraph = function RegisterParagraph({children, ...restProps}){
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Register.SignupButton = function RegisterSignup({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return (
        !toggleShow && <SignupButton onClick={()=>setToggleShow(true)}  {...restProps}>
            {children}
        </SignupButton>
    )
}

Register.SignupForm = function RegisterSignupForm({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext)

    return (
        toggleShow && <SignupForm {...restProps}>{children}</SignupForm>
    )
}

Register.Input = function RegisterInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Register.Label = function RegisterLabel({children, ...restProps}){
    return <Label {...restProps}>{children}</Label>
}

Register.Submit = function RegisterSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

Register.Subheader = function RegisterSubheader({children, ...restProps}){
    return <Subheader {...restProps}>{children}</Subheader>
}

Register.Section = function RegisterSection({children, ...restProps}){
    return <Section {...restProps}>{children}</Section>
}

Register.LoginForm = function RegisterLoginForm({children, ...restProps}) {
    return <LoginForm {...restProps}>{children}</LoginForm>
}

Register.Alert = function RegisterAlert({children, ...restProps}) {
    return <Alert {...restProps}>{children}</Alert>
}