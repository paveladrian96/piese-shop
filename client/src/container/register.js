import React, { useState } from  "react"
import {Register} from "../components"
import {signup, signin, authenticate} from "../apiFunctions/auth"
import { Redirect } from "react-router-dom"
import {isAutheticated} from "../apiFunctions/auth"
import * as ROUTES from "../constants/routes"


export function RegisterContainer(){
    const [values, setValues] = useState({
        nume: '',
        prenume: '',
        email: '',
        telefon: '',
        judet: '',
        localitate: '',
        adresa: '',
        codPostal: '',
        password: '',
        passwordConfirmation: '',
        error: '',
        success: false,
        emailLogin: 'pavel10@gmail.com',
        passwordLogin: 'capita999',
        loading: false,
        redirectToRefferrer: false
    })
    const {user} = isAutheticated()

    const {nume, prenume, email, telefon, judet, localitate, adresa, codPostal, 
        password, passwordConfirmation, error, success,
        emailLogin, passwordLogin, redirectToRefferrer }= values

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({values})
    }

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const clickSubmitSignup = event => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({nume, prenume, email, telefon, judet, localitate, adresa, codPostal, password})
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error, success: false} )
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }
            })
    }

    const clickSubmitLogin = event => {
        event.preventDefault()
        setValues({...values, error: false, loading: true})

        const user = {
            email: emailLogin,
            password: passwordLogin
        }
        signin(user)
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error, loading: false} )
                } else {
                    authenticate(
                        data,
                        () => {
                            setValues({
                                ...values,
                                redirectToRefferrer: true
                            })
                        }
                    )
                }
            })
    }

    const redirectUser = () => {
        if(redirectToRefferrer) {
            if(user && user.role === 1){
                return <Redirect to={ROUTES.adminDashboard} />
            } else {
                return <Redirect to={ROUTES.userDashboard}/>
            }
        }
        if(isAutheticated()) {
            return <Redirect to="/"/>
        }
    }

    const ShowError = () => {
        return <Register.Alert style={{display: error ? '' : 'none'}}>
             {error}
             </Register.Alert>
     }

    const signUpForm = () => {
        return (
            
            <Register.Signup>
                <Register.Subtitle>
                    Client nou? Inregistreaza-te
                </Register.Subtitle>
                <Register.Paragraph>
                    Inregistreaza-te si cumperi mai repede si mai simplu. Beneficiezi de promotii si oferte promotionale exclusive clientilor inregistrati.
                </Register.Paragraph>
                <Register.SignupForm onSubmit={handleSubmit}>
                    <Register.Subheader>
                        Date de contact
                    </Register.Subheader>
                    <Register.Section>
                        <Register.Label>
                            Email:
                            <Register.Input 
                                value={email}
                                onChange = {handleChange('email')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Nume:
                            <Register.Input 
                                value={nume}
                                onChange = {handleChange('nume')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Prenume:
                            <Register.Input 
                                value={prenume}
                                onChange = {handleChange('prenume')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Telefon:
                            <Register.Input 
                                value={telefon}
                                onChange = {handleChange('telefon')}
                            />
                        </Register.Label>
                    </Register.Section>
                    <Register.Subheader>
                        Adresa
                    </Register.Subheader>
                    <Register.Section>
                        <Register.Label>
                            Judet:
                            <Register.Input 
                                value={judet}
                                onChange = {handleChange('judet')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Localitate:
                            <Register.Input 
                                value={localitate}
                                onChange = {handleChange('localitate')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Adresa:
                            <Register.Input 
                                value={adresa}
                                onChange = {handleChange('adresa')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Cod Postal:
                            <Register.Input 
                                value={codPostal}
                                onChange = {handleChange('codPostal')}
                            />
                        </Register.Label>
                    </Register.Section>
                    <Register.Subheader>
                        Parola
                    </Register.Subheader>
                    <Register.Section>
                        <Register.Label>
                            Parola:
                            <Register.Input 
                                value={password}
                                type="password"
                                onChange = {handleChange('password')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Confirma parola
                            <Register.Input 
                                value={passwordConfirmation}
                                type="password"
                                onChange = {handleChange('passwordConfirmation')}
                            />
                        </Register.Label>
                    </Register.Section>
                    <Register.Submit 
                    type="submit"
                    onClick={clickSubmitSignup}
                    >
                        Inregistreaza-te
                    </Register.Submit>
                </Register.SignupForm>
                <Register.SignupButton>
                    Inregistreaza-te
                </Register.SignupButton>
            </Register.Signup>
        )
    }

    const signInForm = () => {
        return(
            <Register.Signin>
                <Register.Subtitle>
                    Contul tau
                </Register.Subtitle>
                <Register.Paragraph>
                    Ai mai cumparat de la noi sau esti deja inregistrat?
                </Register.Paragraph>
                <Register.LoginForm>
                    <Register.Label>
                            Email:
                            <Register.Input 
                                value={emailLogin}
                                onChange = {handleChange('emailLogin')}
                            />
                        </Register.Label>
                        
                        <Register.Label>
                            Parola:
                            <Register.Input 
                                type="password"
                                value={passwordLogin}
                                onChange = {handleChange('passwordLogin')}
                            />
                        </Register.Label>
                        
                        <Register.Submit 
                            type="submit"
                            onClick={clickSubmitLogin}
                            >
                        Intra in cont
                    </Register.Submit>
                </Register.LoginForm>
            </Register.Signin>
        )
    }


    return (
        <>
        <Register>
            {signUpForm()}
            {signInForm()}
            
        </Register>
        {ShowError()}
        {redirectUser()}
        </>
    )
}