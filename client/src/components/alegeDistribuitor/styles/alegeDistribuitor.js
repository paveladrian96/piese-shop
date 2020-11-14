import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 3em 0;
    
`

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    padding-left: 1em;
    padding-bottom: .5em;
    border-bottom: 1px solid ${pallete.light_color}

`

export const Catalog = styled.div`
    width: 30%;

`

export const Piese = styled.div`
    width: 70%;
    border-left: 1px solid ${pallete.light_color}
`

export const Card = styled.div`
    display: flex;
    padding-left: 1em;
    justify-content: space-between;
    border-bottom: 1px solid ${pallete.light_color};
    padding-bottom: 1em;
`

export const Img = styled.div`
    width: 25%;
    margin-bottom: 2em;
`

export const Description = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`
export const DescriptionHeader = styled.div`
    margin-bottom: 1.5rem;
   
`

export const DescriptionMain = styled.div`
    display: flex;
    justify-content: space-between
`

export const DescriptionMain2 = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${pallete.light_color};
`

export const PiesaTitle = styled.h3`
    margin: .2rem 0;
    font-size: 1.2rem;
`

export const PiesaSubtitle = styled.h5`
    font-weight: 300;
    margin: .2rem 0;
    font-size: .9rem;
`

export const PiesaParagraph = styled.p`
    font-size: .8rem;
    margin: .2rem 0;
    border-top: 1px solid ${pallete.light_color};
    border-bottom: 1px solid ${pallete.light_color};
`

export const PiesaInfo = styled.p`
    font-size: .7rem;
    margin: .2rem 0;
   
`

export const PiesaInfo2 = styled.p`
    font-size: .7rem;
    margin: .2rem 0;
    
`

export const Pret = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
`

export const Garantie = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 2em;
`

export const GarantieFirst = styled.p`
    display: block;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0;
`

export const GarantieSecond = styled.p`
    display: block;
    font-weight: 500;
    font-size: .6rem;
    margin: 0;
`
export const AddToCart = styled.button`
    font-size: 1.4rem;
    border: none;
    color: ${pallete.light_color};
    background: ${pallete.constrast_color};
    border-radius: 4px;
    font-weight: 300;
    padding: .35em .9em;
    cursor: pointer;
    margin-top: 1em;
`

export const Reducere = styled.div`
    margin-top: 1px solid ${pallete.light_color};
    display: flex;
    flex-direction: row;
`

export const ReducerePret = styled.p`
    text-decoration: line-through;
    display: block;
    font-size: .8rem;
    margin-right: 1em;
`

export const ReducereProcent = styled.p`
    display: block;
    color: white;
    background: ${pallete.constrast_color};
    border-radius: 6px;
    font-size: .8rem;
    width: fit-content;
`

export const ImgDivider = styled.div`
    display: flex;
    flex-direction: column;
`



