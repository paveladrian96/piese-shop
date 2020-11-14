import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
`
export const ContainerSmall = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    max-width: ${pallete.widthMax};
    overflow: auto;
`
export const TitleMain = styled(ReachRouterLink)`
    font-size: 1.6rem;
    margin-bottom: 1.5em;
    margin-right: 2em;
    text-transform: uppercase;
    text-decoration: none;
    color: ${pallete.dark_color};
    font-weight: 400;
    border-bottom: 1px solid ${pallete.dark_color};
    width: fit-content;

    &:hover{
        
        cursor: pointer;
        color: ${pallete.constrast_color};
        font-weight: 800;
        text-decoration: none;
    }
`

export const Title = styled.h1`
    font-size: .8rem;
    text-align: left;
    padding-left: 1em;
    border-bottom: 1px solid ${pallete.light_color}
    font-weight: 500;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
 
    // align-items: center;
    border-bottom: 1px solid ${pallete.light_color}
`
export const SubCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const Info = styled.div`
    display: flex;
    align-items: center;

`

export const Extension = styled.button`
    display: block;
    border: none;
    background: white;
    cursor: pointer;

    img {
        width: 1em;
        height: 1em;
        margin-right: 1em;
    }

    &:focus{
        border: none;
    }
 
`

export const Body = styled.div`

`

export const Subpiesa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    
`

export const SubpiesaTitle = styled(ReachRouterLink)`
    font-weight: 300;
    font-size: .8rem;
    margin-left: .6rem;
    color: inherit;

    &:hover{
        text-decoration: none;
        cursor: pointer;
        color: ${pallete.constrast_color};

    }
`