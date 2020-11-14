import React from 'react'
import { User } from '../components'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"
import { UserContainer } from "../container/user"

export default function UserDashboard() {
    return (
        <>
            <HeaderContainer />
            <UserContainer />
            <FooterContainer />
        </>
    )
}