import React , {useState, useEffect} from "react"
import { Header } from "../components"
import * as ROUTES from "../constants/routes"
import {isAutheticated, signout} from "../apiFunctions/auth"
import {getTipuriPiese, searchPiese} from "../apiFunctions/getProducts"
import { useHistory } from 'react-router-dom'
import * as pallete from "../constants/theme"
import {getCart} from "../apiFunctions/cartHelpers"



export const HeaderContainer =  ({run}) =>{

    const [error, setError] = useState('')
    const [data, setData] = useState({
        tipuri: [],
        tip: '',
        search: '',
        results: [],
        searched: false,
        
    })
    const [items, setItems] = useState([])
    const [pret, setPret] = useState(0)

    const { tipuri, tip, search, results, searched } = data

    const  loadTipuriPiese = () => {
        getTipuriPiese()
        .then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setData({...data,
                        tipuri: data})
            }
        }) 
    }

    useEffect(() =>{
        loadTipuriPiese()
        setItems(getCart())
        
    },[run])

    useEffect(() =>{
       PretTotal()
        console.log(run)
    },[items])


    const isActive = (history, path) => {
        if (history.location.pathname === path) {
            return {color: pallete.constrast_color,
                    borderBottom: `1px solid ${pallete.constrast_color}`}
        } else {
            return {color: pallete.light_color}
        }
    }

    const history = useHistory()

    const handleSignout = (history) => {
        signout(()=> {
            
        })
    }

    const handleChange = (nume) => e  => {
        setData({...data, [nume]: e.target.value, searched:false})
    }

    const PretTotal = () => {
        let pretCalculat = 0
        items.map((item) => {
            pretCalculat +=item.pret*item.count
            console.log(item.count)
        })
        setPret(pretCalculat)
        
    }

    const searchForm = () => {
        return(
            <Header.SearchField >
                <Header.Search 
                    type="search"
                    placeholder="Cauta piese dupa nume"
                    onChange={handleChange('search')}
                />
                <Header.SearchButton
                    to={`${ROUTES.alegePiesaByName}/${search}`}
                >
                    Cauta
                </Header.SearchButton>
            </Header.SearchField>
        )
    }

    return(
        <Header>
        <Header.ContainerMax>
            <Header.PreHeader>
                
                <Header.Logo to={ROUTES.HOME}>
                    <Header.LogoImg  src={require("../images/logos/classic-auto-logo.jpg")} alt="Classic-Auto" />
                    <Header.LogoText>Classic Auto</Header.LogoText>
                </Header.Logo>
                {searchForm()}
                <Header.Details>
                    <Header.AdminDetails>Contacteaza-ne: <span style={{color: `${pallete.constrast_color}`, fontWeight: "800"}}>0752107410</span></Header.AdminDetails>
                    <Header.AdminDetails>Program: Lun-Vin: 09:00 - 18:00</Header.AdminDetails>
                    <Header.AdminDetails>E-mail: office@classicauto.ro</Header.AdminDetails>
                </Header.Details>
                
            </Header.PreHeader>
            </Header.ContainerMax>
            <Header.Main>
                <Header.InfoShop>
                    <Header.Button
                            to={ROUTES.HOME}
                            style={isActive(history, ROUTES.HOME)}
                    >
                        Pagina principala
                    </Header.Button>

                    <Header.Button
                            to={ROUTES.alegePiesa}
                            style={isActive(history, ROUTES.alegePiesa)}
                    >
                        Piese auto
                    </Header.Button>

                    <Header.Button
                            to={ROUTES.alegeMarca}
                            style={isActive(history, ROUTES.alegeMarca)}
                    >
                        Marca auto
                    </Header.Button>
                    <Header.Button
                            to={ROUTES.alegeProducatori}
                            style={isActive(history, ROUTES.alegeProducatori)}
                    >
                        Producatori
                    </Header.Button>
                </Header.InfoShop>
                <Header.RightSide>
                    <Header.InfoClient>
                            <Header.ButtonSmall  
                                to={ROUTES.userDashboard}
                                style={isActive(history, ROUTES.userDashboard)}
                                src={require("../images/logos/favorite.png")}
                            >
                            Salvate
                            </Header.ButtonSmall>
                    {isAutheticated() && isAutheticated().user.role === 0 &&
                            <Header.ButtonSmall  
                                to={ROUTES.userDashboard}
                                style={isActive(history, ROUTES.userDashboard)}
                                src={require("../images/logos/account.png")}
                            >
                                    Contul meu
                            </Header.ButtonSmall>}
                        {isAutheticated() && isAutheticated().user.role === 1 &&
                            <Header.ButtonSmall   
                                to={ROUTES.adminDashboard}
                                style={isActive(history, ROUTES.adminDashboard)}
                                src={require("../images/logos/account.png")} 
                            >
                                Contul meu
                            </Header.ButtonSmall>}
                    
                        {!isAutheticated() &&
                            <Header.ButtonSmall src={require("../images/logos/login.png")} 
                            style={isActive(history, ROUTES.REGISTER)}
                                            to={ROUTES.REGISTER}>Intra in cont 
                            </Header.ButtonSmall>}
                            {isAutheticated() && 
                            <Header.ButtonSmall 
                                src={require("../images/logos/logout.png")} 
                                to={ROUTES.HOME}
                                onClick={handleSignout}
                                style={isActive(history, ROUTES.REGISTER)}
                            >
                                Iesi din cont 
                            </Header.ButtonSmall>}
                        </Header.InfoClient>
                        <Header.Basket
                        src={require("../images/logos/cart.png")}
                            to={ROUTES.cart}
                        >
                            <span style={{fontSize: ".8rem", color: `${pallete.light_color}`, marginRight: "1em"}}>{items.length > 0  ? `${items.length} articole salvate` : "Niciun articol salvat" }</span>
                                {pret} RON 
                        </Header.Basket>
                    </Header.RightSide>
            </Header.Main>
           
        </Header>
    )
}

