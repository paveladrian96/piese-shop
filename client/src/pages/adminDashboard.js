import React from 'react'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"
import { AdminContainer } from "../container/admin"

export default function AdminDashboard() {
    return (
        <>
            <HeaderContainer />
            <AdminContainer />
            <FooterContainer />
        </>
    )
}