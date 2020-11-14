import styled from "styled-components"

export const Container = styled.div`
    max-width: 800px;
    margin: 2em auto;
    
    padding: 2em;
    padding-top: 1em;
    border-radius: 10px;
    box-shadow:  5px 5px 5px 5px #aaaaaa;

`

export const Paragraph = styled.p`
    font-size: .9rem;
    line-height: 1.6;
    font-weight: ${({bold})=> bold}; 
    text-indent: .8em;
`

export const ParagraphTitle = styled.h2`
    font-size: 1.6rem;
    text-align: center;
    margin: 2em 0;
`
export const ParagraphSubtitle = styled.h3`
    font-size: 1.3 rem;
    text-align: center;
    margin: 1.5em 0;
`

export const List = styled.ul`
   
`
export const ListItem = styled.li`
    font-weight: ${({bold})=> bold};    
    font-size: .9rem;
    line-height: 1.6;
    line-height: 1.4;
`