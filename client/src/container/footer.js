import React from "react"
import { Footer } from "../components"
import * as ROUTES from "../constants/routes"

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Classic Auto Store</Footer.Title>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Subtitle>Magazin piese auto</Footer.Subtitle>
                    <Footer.InternalRoute to={ROUTES.despreNoi}>Despre noi</Footer.InternalRoute>
                    <Footer.InternalRoute to={ROUTES.termeniSiContitii}>Termeni si conditii</Footer.InternalRoute>
                    <Footer.InternalRoute to={ROUTES.politicaDeConfidentialitate}>Politica de confidentialitate</Footer.InternalRoute>
                    <Footer.InternalRoute to={ROUTES.contact}>Contact</Footer.InternalRoute>

                </Footer.Column>
                <Footer.Column>
                    <Footer.Subtitle>Serviciul clienti</Footer.Subtitle>
                    <Footer.InternalRoute to={ROUTES.metodaDePlata}>Metoda de plata</Footer.InternalRoute>
                    <Footer.InternalRoute to={ROUTES.politicaDeRetur}>Politica de retur</Footer.InternalRoute>
                    <Footer.InternalRoute to={ROUTES.garantiaProduselor}>Garantia produselor</Footer.InternalRoute>
                    <Footer.Link href="https://anpc.ro/">ANPC</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Subtitle>Suport clienti</Footer.Subtitle>
                    <Footer.SuportInfo>0752107410</Footer.SuportInfo>
                    <Footer.SuportInfo>contact@classicauto.ro</Footer.SuportInfo>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Subtitle>Urmareste-ne</Footer.Subtitle>
                    <Footer.Link href="https://www.facebook.com/Classic-Auto-282152762286845/">Facebook</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Copyright>
                <p>Classic Auto © 2020 - Toate drepturile rezervate</p>
            </Footer.Copyright>
        </Footer>
    )
}