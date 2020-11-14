import React from "react"
import { Container, Image } from "./styles/ownCarousel"

export default function OwnCarousel({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OwnCarousel.Image = function OwnCarouselImage({children, ...restProps}){
    return <Image {...restProps}>{children}</Image>
}