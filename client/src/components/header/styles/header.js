import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    background: ${pallete.dark_color};
    color: ${pallete.light_color};
    display: flex;
    flex-direction: column;
    margin: 0;

`

export const ContainerMax = styled.div`
   
    background: ${pallete.light_color};
`



export const PreHeader = styled.div`
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    background: ${pallete.light_color};
    color: ${pallete.dark_color};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7em 0;
    

`

export const Main = styled.div`
    width: ${pallete.widthMax};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 0;
`

export const AdminDetails = styled.p`
    display: block;
    margin: .1rem;
    font-size: .9rem;
`

export const LogoImg = styled.img`
    width: 150px;
    height: 35px;
    object-fit: cover;

    margin: 0;
`
export const Logo = styled(ReachRouterLink)`
    display: flex;
    flex-direction: column;
    margin:0;
    text-decoration: none;
    align-items: center;
    &:hover {
        text-decoration: none;
    }

`
export const LogoText = styled.p`
    font-size: 2rem;
    font-weight: 800;
    font-style: italic;
    color: ${pallete.constrast_color};
    margin:0;
    color: #d62d2a;
`

export const Button = styled(ReachRouterLink)`
    border: none;
    padding: 0.9em 0;
    
    font-size: 1rem;
    height: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: inherit;
    color: ${pallete.light_color};
    text-decoration: none;

    img {
        filter: brightness(0) invert(.9);
        width: 1.5em;
        margin-right: .4em;
    }
`

export const ButtonSmall = styled(ReachRouterLink)`
    border: none;
    padding: 0.2em 0;
    
    font-size: .8rem;
    height: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: inherit;
    color: ${pallete.light_color};
    text-decoration: none;
    margin-bottom: .5em;

    &:hover:{
        color:  ${pallete.light_color};
    }

    img {
        filter: brightness(0) invert(.9);
        width: 1.5em;
        margin-right: .4em;
    }
`
export const RightSide = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InfoShop = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

`

export const InfoClient = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`

export const Basket = styled(ReachRouterLink)`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    background: #0a1a24;
    padding: .4rem;
    color: ${pallete.constrast_color};

    img {
        filter: brightness(0) invert(1);
        width: 2em;
        margin-right: .4em;
        text-decoration: none;
    
    }
`

export const Search = styled.input`
    font-size: 1.2rem;
    padding: .5em 1em;
    border: ${pallete.constrast_color} 2px solid;
    
`

export const SearchButton = styled(ReachRouterLink)`
    font-size: 1.2rem;
    padding: .5em 1em;
    background: ${pallete.constrast_color};
    border: none;
    cursor: pointer;
    color: ${pallete.light_color};

    &:hover {
        text-decoration: underline;
    }
    

`

export const SearchField = styled.form`
    display: flex;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`

export const Select = styled.select`
    font-size: 1.2rem;
    padding: .5em 1em;
    border: ${pallete.constrast_color} 2px solid;
`

export const Option = styled.option`
    font-size: 1.2rem;
    padding: .5em 1em;
    border: ${pallete.constrast_color} 2px solid;
    color: ${pallete.dark_color}
`

