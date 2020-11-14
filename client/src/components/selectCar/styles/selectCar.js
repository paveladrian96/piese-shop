import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: ${pallete.light_color};
    padding: 1em;
    margin-bottom: 2em;
    box-sizing: border-box;
`

export const Title = styled.h1`
    font-size: .9rem;
    line-height: 1.6;
    font-weight: ${({bold})=> bold}; 
    text-indent: .8em;
    font-weight: 800;
`

export const StepsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StepsColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: .5em;
    align-items: center;
`
export const StepsText = styled.p`
    font-size: .8rem;
`

export const StepsImg = styled.img`
    width: 2em;
    height: 2.2em;
    filter: brightness(.2) invert(${({invert})=> invert});

    
`

export const Select = styled.select`
    font-size: 1.2rem;
    padding: .5em .7em;
    margin-bottom: 1em;
    border: 1px solid ${pallete.light_color};
    box-shadow: 2px 2px 2px ${pallete.dark_color};

   
`

export const Option = styled.option`
    font-size: 1rem;
`

export const Button = styled(ReachRouterLink)`
    font-size: 1.2rem;
    padding: .5em 1em;
    background: ${pallete.constrast_color};
    border: none;
    cursor: pointer;
    color: ${pallete.light_color};
    text-align: center;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

`