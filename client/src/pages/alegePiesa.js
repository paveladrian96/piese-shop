import React from 'react'
import { AlegePiesaContainer } from '../container/alegePiesa'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"

export default function AlegePiesa() {
    return (
        <>
            <HeaderContainer />
            <AlegePiesaContainer />
            <FooterContainer />
        </>
    )
}
