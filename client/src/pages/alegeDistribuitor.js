import React from 'react'
import { AlegeDistribuitorContainer } from '../container/alegeDistribuitor'
import { AlegePiesaContainer } from '../container/alegePiesa'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"


export default function AlegeDistribuitor (props) {
    return (
        <>
            <HeaderContainer />
            <AlegeDistribuitorContainer props={props}/>
            <FooterContainer />
        </>
    )
}
