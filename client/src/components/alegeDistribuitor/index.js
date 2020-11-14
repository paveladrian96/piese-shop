import React from "react"
import { Container, Title, Catalog, Piese, Card, Description, Img, Pret,
    PiesaParagraph, PiesaTitle, PiesaSubtitle, DescriptionMain, DescriptionHeader, PiesaInfo, 
    DescriptionMain2, Garantie, GarantieFirst, GarantieSecond, AddToCart,
    Reducere, ReducerePret, ReducereProcent, ImgDivider} from "./styles/alegeDistribuitor"

export default function Distribuitor({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Distribuitor.Title = function DistribuitorTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Distribuitor.Catalog = function DistribuitorCatalog({children, ...restProps}){
    return <Catalog {...restProps}>{children}</Catalog>
}

Distribuitor.Piese = function DistribuitorPiese({children, ...restProps}){
    return <Piese {...restProps}>{children}</Piese>
}

Distribuitor.Card = function DistribuitorCard({children, ...restProps}){
    return <Card {...restProps}>{children}</Card>
}

Distribuitor.ImgDivider = function DistribuitorImgDivider({children, ...restProps}){
    return <ImgDivider {...restProps}>{children}</ImgDivider>
}

Distribuitor.Img = function DistribuitorImg({children, ...restProps}){
    return <Img {...restProps}>{children}</Img>
}

Distribuitor.Description = function DistribuitorDescription({children, ...restProps}){
    return <Description {...restProps}>{children}</Description>
}

Distribuitor.Pret = function DistribuitorPret({children, ...restProps}){
    return <Pret {...restProps}>{children}</Pret>
}

Distribuitor.PiesaTitle = function DistribuitorPiesaTitle({children, ...restProps}){
    return <PiesaTitle {...restProps}>{children}</PiesaTitle>
}

Distribuitor.PiesaSubtitle = function DistribuitorPiesaSubtitle({children, ...restProps}){
    return <PiesaSubtitle {...restProps}>{children}</PiesaSubtitle>
}

Distribuitor.PiesaParagraph = function DistribuitorPiesaParagraph({children, ...restProps}){
    return <PiesaParagraph {...restProps}>{children}</PiesaParagraph>
}

Distribuitor.DescriptionHeader = function DistribuitorDescriptionHeader({children, ...restProps}){
    return <DescriptionHeader {...restProps}>{children}</DescriptionHeader>
}

Distribuitor.DescriptionMain = function DistribuitorDescriptionMain({children, ...restProps}){
    return <DescriptionMain {...restProps}>{children}</DescriptionMain>
}

Distribuitor.PiesaInfo = function DistribuitorPiesaInfo({children, ...restProps}){
    return <PiesaInfo {...restProps}>{children}</PiesaInfo>
}

Distribuitor.DescriptionMain2 = function DistribuitorDescriptionMain2({children, ...restProps}){
    return <DescriptionMain2 {...restProps}>{children}</DescriptionMain2>
}

Distribuitor.Garantie = function DistribuitorGarantie({children, ...restProps}){
    return <Garantie {...restProps}>{children}</Garantie>
}

Distribuitor.GarantieFirst = function DistribuitorGarantieFirst({children, ...restProps}){
    return <GarantieFirst {...restProps}>{children}</GarantieFirst>
}

Distribuitor.GarantieSecond = function DistribuitorGarantieSecond({children, ...restProps}){
    return <GarantieSecond {...restProps}>{children}</GarantieSecond>
}

Distribuitor.AddToCart = function DistribuitorAddToCart({children, ...restProps}){
    return <AddToCart {...restProps}>{children}</AddToCart>
}

Distribuitor.Reducere = function DistribuitorReducere({children, ...restProps}){
    return <Reducere {...restProps}>{children}</Reducere>
}

Distribuitor.ReducerePret = function DistribuitorReducerePret({children, ...restProps}){
    return <ReducerePret {...restProps}>{children}</ReducerePret>
}

Distribuitor.ReducereProcent = function DistribuitorReducereProcent({children, ...restProps}){
    return <ReducereProcent {...restProps}>{children}</ReducereProcent>
}










