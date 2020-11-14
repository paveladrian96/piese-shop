import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    max-width: ${pallete.widthMax};
    margin: 1.5em auto;
    justify-content: space-between;
`

export const Info = styled.div``

export const Manager = styled.div``

export const Title = styled.h1``

export const InfoList = styled.ul``

export const InfoListItem = styled.li``

export const Button = styled(ReachRouterLink)`
    display: block;
    border: none;
    width: 25%;
    font-size: 1rem;
    cursor: pointer;
    align-items: center;
    background: ${pallete.constrast_color};
    color: ${pallete.light_color};
    text-decoration: none;
    padding: .3em .9em;
    margin: 1em 0;
`
export const ButtonRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ButtonColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
