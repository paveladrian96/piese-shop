import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    max-width: ${pallete.widthMax};
    padding: 2em 0;
    margin: 0 auto;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    width: 35%;
`

export const Right = styled.div`
    width: 60%;
`

export const Title = styled.h1`
    margin-bottom: 1.2em;
`

export const Card = styled.div`
    margin-bottom: 2.5em;

`

export const Subtitle = styled.div`
    display: block;
    padding: .5em 1em;
    background: ${pallete.light_color};
    font-weight: 500;
    font-size: 1.3rem;
`

export const Paragraph = styled.div`
    display: block;
    padding: .5em 1em;
    border-bottom: 1px solid ${pallete.light_color};
`

export const Link = styled(ReachRouterLink)`
    display: block;
    padding: .5em 1em;
    border-bottom: 1px solid ${pallete.light_color};
`