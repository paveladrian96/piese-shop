import React from "react"
import { Admin } from "../components"
import * as ROUTES from "../constants/routes"
import { isAutheticated} from "../apiFunctions/auth"

export function AdminContainer() {

    const {user} = isAutheticated()
    const {nume, email, role} = user


    return(
        <Admin>
            <Admin.Info>
                <Admin.Title>
                    Informatii admin
                </Admin.Title>
                <Admin.InfoList>
                    <Admin.InfoListItem>
                        {nume}
                    </Admin.InfoListItem>
                    <Admin.InfoListItem>
                        {email}
                    </Admin.InfoListItem>
                    <Admin.InfoListItem>
                        {role === 1 ? "Admin" : "Registered"}
                    </Admin.InfoListItem>
                    <Admin.Button to={ROUTES.orders}>
                            Manage your orders
                    </Admin.Button>
                </Admin.InfoList>
            </Admin.Info>
            <Admin.Manager>
                <Admin.Title>
                    Adauga / Modifica resursele magazinului
                </Admin.Title>
                <Admin.ButtonRow>
                    <Admin.ButtonColumn>
                        <Admin.Button to={ROUTES.adaugaMarcaAuto}>
                            Adauga o marca auto
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaMarcaAuto}>
                            Editeaza o marca auto
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaMarcaAuto}>
                            Sterge o marca auto
                        </Admin.Button>
                    </Admin.ButtonColumn>
                </Admin.ButtonRow>
                <Admin.ButtonRow>
                    <Admin.ButtonColumn>
                        <Admin.Button to={ROUTES.adaugaModelAuto}>
                            Adauga un model auto
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaModelAuto}>
                           Editeaza un model auto
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaModelAuto}>
                            Sterge un model auto
                        </Admin.Button>
                    </Admin.ButtonColumn>
                </Admin.ButtonRow>
                <Admin.ButtonRow>
                    <Admin.ButtonColumn>
                        <Admin.Button to={ROUTES.adaugaTipPiesa}>
                            Adauga un tip de piese
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaTipPiesa}>
                            Editeaza un tip de piese
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaTipPiesa}>
                            Sterge un tip de piese
                        </Admin.Button>
                    </Admin.ButtonColumn>
                </Admin.ButtonRow>
                <Admin.ButtonRow>
                    <Admin.ButtonColumn>
                        <Admin.Button to={ROUTES.adaugaSubtipPiesa}>
                            Adauga un subtip de piese
                        </Admin.Button>
                        <Admin.Button to={ROUTES.editeazaSubtipPiesa}>
                           Editeaza un subtip de piese
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaSubtipPiesa}>
                            Sterge un subtip de piese
                        </Admin.Button>
                    </Admin.ButtonColumn>
                </Admin.ButtonRow>
                <Admin.ButtonRow>
                    <Admin.ButtonColumn>
                        <Admin.Button to={ROUTES.adaugaDistribuitor} >
                            Adauga Distribuitor
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaDistribuitor} >
                            Editeaza Distribuitor
                        </Admin.Button>
                        <Admin.Button to={ROUTES.adaugaDistribuitor} >
                            Sterge Distribuitor
                        </Admin.Button>
                    </Admin.ButtonColumn>
                </Admin.ButtonRow>
            </Admin.Manager>
        </Admin>
    )
}