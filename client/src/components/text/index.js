import React from 'react'
import { Container, Paragraph, ParagraphTitle, List, ListItem, ParagraphSubtitle } from "./styles/text"

export default function Text({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container> 
}

Text.Paragraph = function TextParagraph({children, ...restProps}){
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Text.ParagraphTitle = function TextParagraphTitle({bold=500, children, ...restProps}){
    return <ParagraphTitle bold={bold} {...restProps}>{children}</ParagraphTitle>
}

Text.List = function TextList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
}

Text.ListItem = function TextListItem({bold=300 , children, ...restProps}){
    return <ListItem bold={bold} {...restProps}>{children}</ListItem>
}

Text.ParagraphSubtitle = function TextParagraphSubtitle({children, ...restProps}){
    return <ParagraphSubtitle {...restProps}>{children}</ParagraphSubtitle>
}