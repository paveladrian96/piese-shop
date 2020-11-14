import React , {useState, useContext, createContext }from "react"
import { Card, Title, Container, Info, Extension, SubCard, Body,
    Subpiesa, SubpiesaTitle, TitleMain, ContainerSmall} from "./styles/catalog"

const ToggleContext = createContext()

export default function Catalog({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Catalog.ContainerSmall = function CatalogContainerSmall({children, ...restProps}){
    return <ContainerSmall {...restProps}>{children}</ContainerSmall>
}

Catalog.Title = function CatalogTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Catalog.Card = function CatalogCard({children, ...restProps}){
    const[toggleShow, setToggleShow] = useState(false)

    return (  
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
        <Card {...restProps}>{children}</Card>
    </ToggleContext.Provider>
    )
}

Catalog.SubCard = function CatalogSubCard({children, ...restProps}){
    
    
    return <SubCard {...restProps}>{children}</SubCard>

}

Catalog.Info = function CatalogInfo({children, ...restProps}){
    return <Info {...restProps}>{children}</Info>
}

Catalog.Extension = function CatalogExtension({children, src, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return <Extension onClick={()=>setToggleShow(!toggleShow)} {...restProps}> 
                
                {toggleShow ? (
                <img  src={require("../../images/logos/close.png")} alt="Close"/>
                ) : (
                <img  src={require("../../images/logos/add.png")} alt="Add"/>
                )}
                {children}
           </Extension>
}

Catalog.Body = function CatalogBody({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext)

    return (
        toggleShow ? <Body {...restProps}>{children}</Body> : null
    )
}


Catalog.Subpiesa = function CatalogSubpiesa({children, ...restProps}){
    return <Subpiesa {...restProps}>{children}</Subpiesa>
}

Catalog.SubpiesaTitle = function CatalogSubpiesaTitle({children, ...restProps}){
    return <SubpiesaTitle {...restProps}>{children}</SubpiesaTitle>
}

Catalog.TitleMain = function CatalogTitleMain({children, ...restProps}){
    return <TitleMain {...restProps}>{children}</TitleMain>
}