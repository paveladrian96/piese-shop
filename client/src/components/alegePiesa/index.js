import React from "react"
import { Container, Title, Card, CardContainer, Subpiesa, SubtitlePiesa, Subtitle} from "./styles/alegePiesa"

export default function Piesa({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Piesa.Title = function PiesaTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Piesa.Card = function PiesaCard({children, ...restProps}){
    return <Card {...restProps}>{children}</Card>
}

Piesa.CardContainer = function PiesaCardContainer({children, ...restProps}){
    return <CardContainer {...restProps}>{children}</CardContainer>
}

Piesa.Subpiesa = function PiesaSubpiesa({children, ...restProps}){
    return <Subpiesa {...restProps}>{children}</Subpiesa>
}

Piesa.SubtitlePiesa = function PiesaSubtitlePiesa({children, ...restProps}){
    return <SubtitlePiesa {...restProps}>{children}</SubtitlePiesa>
}

Piesa.Subtitle = function PiesaSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

