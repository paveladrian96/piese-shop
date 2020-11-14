import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 3em;
`

export const Title = styled.h1``

export const Label = styled.label`
    display: block;
    font-size: 1.4rem;
    margin: 1em 0 .5em;
`

export const Input = styled.input`
    display: block;
    font-size: 1.4rem;
`

export const Form = styled.form``

export const Submit = styled.button`
    display: block;
    border: none;
    font-size: 1.5rem;
    margin-right: 3em;
    cursor: pointer;
    width: 60%;
    background: ${pallete.constrast_color};
    color: ${pallete.light_color};
    text-decoration: none;
    padding: 1em 0;
    margin: 2em 0;
`
export const Select = styled.select`
    font-size: 1.4rem;
`
export const Option = styled.option`
    font-size: 1.4rem;
`

