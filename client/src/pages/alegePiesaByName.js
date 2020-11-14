import React from 'react'
import { AlegePiesaByNameContainer } from '../container/alegePiesaByName'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"


export default function AlegePiesaByName (props) {
    return (
        <>
            <HeaderContainer />
            <AlegePiesaByNameContainer props={props}/>
            <FooterContainer />
        </>
    )
}
