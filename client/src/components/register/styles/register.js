import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 2em 0;
`

export const Signin = styled.div`
    
    max-width: 600px;
    padding: 1.5em;
`

export const Signup = styled.div`
    max-width: 600px;
    padding: 1.5em;
`

export const Subtitle = styled.h2`
    font-size: 2.5em;
`

export const Paragraph = styled.p`
    font-size: 1.2em;
`

export const SignupButton = styled.button`
    font-size: 1.4rem;
    border: none;
    color: ${pallete.light_color};
    background: ${pallete.constrast_color};
    border-radius: 4px;
    font-weight: 300;
    padding: .35em .9em;
    cursor: pointer;
`

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1.2em;
    display: block;
    width: fit
`
export const Input = styled.input`
    font-size: 1.2em;
    color: ${pallete.dark_color};
    display: block;
`

export const Submit = styled.button`
    font-size: 1.4rem;
    border: none;
    color: ${pallete.light_color};
    background: ${pallete.constrast_color};
    border-radius: 4px;
    font-weight: 300;
    padding: .35em .9em;
    width: fit-content;
    margin-top: 1em;
    cursor: pointer
`

export const Subheader = styled.h2`
    display: block;
    background: ${pallete.light_color};
    padding: .3em;
    box-shadow: 2.5px 5px;
`

export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 1em;
    box-sizing: border-box;
`

export const LoginForm= styled.form``


export const Alert = styled.div`
  padding: 20px;
  background-color: ${pallete.red_color}; /* Red */
  color: white;
  margin-bottom: 15px;
`