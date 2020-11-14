import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 3em 0;
    
`

export const Title = styled.h1`
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1.5em;
    margin-right: 2em;
    text-transform: uppercase;

    &:hover{
        
        cursor: pointer;
        color: ${pallete.constrast_color};
        font-weight: 800;
    }


`
export const MarciAuto = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    // grid-gap: 1em;
    max-height: 60vh;
    overflow: auto;
    padding: .2em 0;
`

export const MarciAutoSmall = styled.div`
    display: flex;
    max-height: 30vh;
    overflow: auto;
    padding: .2em 0;

`


export const Name = styled.p`
    width: 100%;
    display: block;
    font-size: .9rem;
    font-weight: inherit;
    color: inherit;
    margin: 0;
    text-align: center;
    padding: .4em;
    background: ${pallete.light_color};
`

export const MarciAutoCard = styled(ReachRouterLink)`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    justify-content: space-between;
    border-radius: 4px;
    transition: transform 1000ms;
    font-weight: 300;
    color: inherit;
    text-decoration: none;
    margin-right: 1.5em;
    margin-bottom: 1em;

    &:hover{
        
        cursor: pointer;
        color: ${pallete.constrast_color};
        font-weight: 800;
        box-shadow: 1px 1px 1px 1px #888888;
        text-decoration: none;
    }

`

export const Button = styled.button`
border: none;
    font-size: 1.2rem;
    margin-right: 3em;
    height: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: ${pallete.constrast_color};
    color: ${pallete.light_color};
    text-decoration: none;
`

export const Caroserie = styled.h2`
    font-size: 1.4rem;
    border-bottom: 1px solid ${pallete.gray_color}
`

export const TitleCaroussel = styled.div`
    display: flex;
  
    font-size: 1rem;

`

export const TitleLink = styled(ReachRouterLink)`
    font-size: 1.6rem;
    margin-bottom: 1.5em;
    margin-right: 2em;
    text-transform: uppercase;
    text-decoration: none;
    color: ${pallete.dark_color};
    font-weight: 500;
    border-bottom: 1px solid ${pallete.dark_color};
    width: fit-content;

    &:hover{
        
        cursor: pointer;
        color: ${pallete.constrast_color};
        font-weight: 800;
        text-decoration: none;
    }


`