import React, {useState, useEffect} from  "react"
import {Redirect} from  "react-router-dom"
import { listRelatedByName, getDistribuitoriById, searchPiese } from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Distribuitor} from "../components"
import {addItem } from "../apiFunctions/cartHelpers"

const CardPiesa =  ({piesa, distribuitoriUnici, cart=false}) => {

    const [redirect, setRedirect] = useState(false)
    const addToCart = piesa => {
        addItem(piesa, () => {
            setRedirect(true)
        })
}   

    const shouldRedirect = redirect => {
        if(redirect) {
            return <Redirect to="/cart" />
        }
    }

    const showDescriptionMain = () =>{
        return (
            <>
            <Distribuitor.DescriptionMain>
                <Distribuitor.PiesaParagraph>
                    Informatii despre articol:
                </Distribuitor.PiesaParagraph>
            </Distribuitor.DescriptionMain>
            <Distribuitor.DescriptionMain>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    An fabricatie de la: 
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    02.2012
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain>
            <Distribuitor.DescriptionMain2>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    Inaltime [mm]: 
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    133.6
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain2>
            <Distribuitor.DescriptionMain>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    Diametru interior [mm]: 
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    18
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain>
            <Distribuitor.DescriptionMain2>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    Diametru exterior [mm]:
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                    20
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain2>
            <Distribuitor.DescriptionMain>
                <Distribuitor.PiesaInfo>
                    Diametru [mm]: 
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo>
                    54, 53
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain>
            <Distribuitor.DescriptionMain2>
                <Distribuitor.PiesaInfo>
                    Articol extins / Informatii de extindere:
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo>
                    cu garnituri
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain2>
            <Distribuitor.DescriptionMain>
                <Distribuitor.PiesaInfo>
                    Număr articol:
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo>
                        HU 6004 x
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain>
            <Distribuitor.DescriptionMain2>
                <Distribuitor.PiesaInfo>
                Prețul nostru:
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo>
                    {piesa.pret}
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain2>
            <Distribuitor.DescriptionMain>
                <Distribuitor.PiesaInfo>
                Conditie:
                </Distribuitor.PiesaInfo>
                <Distribuitor.PiesaInfo>
                        nou
                </Distribuitor.PiesaInfo>
            </Distribuitor.DescriptionMain>
            </>
        )
    }

    const showPriceDescription = () => (
        <Distribuitor.Pret>
                    <Distribuitor.Garantie>
                        <Distribuitor.GarantieFirst>
                            2 ANI
                        </Distribuitor.GarantieFirst>
                        <Distribuitor.GarantieSecond>
                            GARANTIE
                        </Distribuitor.GarantieSecond>
                    </Distribuitor.Garantie>
                    <Distribuitor.PiesaParagraph>
                        Adaugati la lista de dorinte
                    </Distribuitor.PiesaParagraph>
                    <Distribuitor.Reducere>
                        <Distribuitor.ReducerePret>
                            {(piesa.pret * 0.3 + piesa.pret).toFixed(2)} RON
                        </Distribuitor.ReducerePret>
                        <Distribuitor.ReducereProcent>
                            -29%
                        </Distribuitor.ReducereProcent>
                    </Distribuitor.Reducere>
                    <Distribuitor.PiesaInfo>
                        Pret:
                    </Distribuitor.PiesaInfo>
                    <Distribuitor.PiesaTitle>
                        {piesa.pret} RON
                    </Distribuitor.PiesaTitle>
                    <Distribuitor.PiesaInfo>
                        Economisiti:
                    </Distribuitor.PiesaInfo>
                    <Distribuitor.DescriptionMain2>
                        <Distribuitor.PiesaInfo>
                        {((piesa.pret * 0.3 + piesa.pret) - piesa.pret).toFixed(1)} RON
                        </Distribuitor.PiesaInfo>
                    </Distribuitor.DescriptionMain2>
                    <Distribuitor.PiesaInfo style={{fontWeight: "500"}}>
                        incl. 19% TVA, fără сosturile de livrare
                    </Distribuitor.PiesaInfo>
                    <Distribuitor.PiesaParagraph>
                        {piesa.cantitate > 0 ? "In stoc" : "Stocul este epuizat"}
                    </Distribuitor.PiesaParagraph>
                    <Distribuitor.AddToCart onClick={() =>addToCart(piesa)}>
                        CUMPARA
                    </Distribuitor.AddToCart>

                </Distribuitor.Pret> 
    )

    const showPiesa = ( piesa) => (
        <Distribuitor.Card>
                <Distribuitor.ImgDivider>
                    <Distribuitor.Img>
                        <ShowImage dimension = {'100px'} item={piesa} url="subtipPieseAuto"/>
                    </Distribuitor.Img>
                    {distribuitoriUnici && distribuitoriUnici.map((d, i) => (
                        d.nume === piesa.distribuitor && 
                        <Distribuitor.Img key={i}>
                            <ShowImage dimension = {'100px'} item={d} url="distribuitori"/>
                        </Distribuitor.Img>
                    ))}
                </Distribuitor.ImgDivider>        
                 <Distribuitor.Description>
                    <Distribuitor.DescriptionHeader>
                        <Distribuitor.PiesaTitle>
                            {piesa.distribuitor} {piesa.nume}
                        </Distribuitor.PiesaTitle>
                        <Distribuitor.PiesaSubtitle>
                            {piesa.specificatii}
                        </Distribuitor.PiesaSubtitle>
                        <Distribuitor.PiesaParagraph>
                            Id articol: {piesa._id.slice(5,15)}
                        </Distribuitor.PiesaParagraph>
                    </Distribuitor.DescriptionHeader>
                    {!cart && showDescriptionMain()}
                </Distribuitor.Description> 
                {!cart && showPriceDescription()}
                {shouldRedirect(redirect)}
            </Distribuitor.Card>
    )


    return(
        showPiesa( piesa)
    )
}

export default CardPiesa