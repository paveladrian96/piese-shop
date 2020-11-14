import React from 'react'
import { FooterContainer } from '../../container/footer'
import { HeaderContainer } from '../../container/header'
import { ContactContainer } from '../../container/textContainers/contact'

export  function Contact() {
    return (
        <>
            <HeaderContainer />
            <ContactContainer />
            <FooterContainer />
        </>
    )
}
