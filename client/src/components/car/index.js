import React from "react"
import { Container, Title, MarciAuto, MarciAutoCard, Name , Button,
        Caroserie, TitleCaroussel, MarciAutoSmall, TitleLink} from "./styles/car"

export default function Car({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Car.Title = function CarTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Car.MarciAuto = function CarMarciAuto({children, ...restProps}){
    return <MarciAuto {...restProps}>{children}</MarciAuto>
}
Car.MarciAutoSmall = function CarMarciAutoSmall({children, ...restProps}){
    return <MarciAutoSmall {...restProps}>{children}</MarciAutoSmall>
}

Car.MarciAutoCard = function CarMarciAutoCard({children, ...restProps}){
    return <MarciAutoCard {...restProps}>{children}</MarciAutoCard>
}

Car.Name = function CarName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}

Car.Button = function CarButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Car.Caroserie = function CarCaroserie({children, ...restProps}){
    return <Caroserie {...restProps}>{children}</Caroserie>
}

Car.TitleCaroussel = function CarTitleCaroussel({children, ...restProps}){
    return <TitleCaroussel {...restProps}>{children}</TitleCaroussel>
}

Car.TitleLink = function CarTitleLink({children, ...restProps}){
    return <TitleLink {...restProps}>{children}</TitleLink>
}
