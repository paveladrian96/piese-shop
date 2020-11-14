import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 3em 0;
    
`

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    margin: 0 0 1em;
    border-bottom: 1px solid ${pallete.dark_color}

`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: .5em;
    padding: .2em 0;
    margin: 0;

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${pallete.light_color};
    margin: 0;
    
`

export const Subpiesa = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: .4em;
`

export const SubtitlePiesa = styled(ReachRouterLink)`
    display: block;
    margin: 0;
    margin-left: 0.5em;
    font-size: .7rem;
    width: 75%;
    color: inherit;
    text-decoration: underline;

    &:hover{
        cursor: pointer;
        color: ${pallete.constrast_color};
        text-decoration: none;
    }
`

export const Subtitle = styled.h5`
    display: block;
    background: ${pallete.light_color};
    padding: .5rem;
    height: 3rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
`