import React from 'react'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"
import { MainHomeContainer } from '../container/mainHome'

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <MainHomeContainer />
            <FooterContainer />
        </>
    )
}
