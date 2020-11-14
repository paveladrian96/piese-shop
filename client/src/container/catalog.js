import React, {useState, useEffect} from  "react"
import {  getTipuriPiese, getSubtipuriPiese } from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Catalog, Piesa } from "../components"
import * as ROUTES from "../constants/routes"

const CatalogContainer =  ({dimension="big"}) => {
    const [tipPieseAuto, setTipPieseAuto] = useState([])
    const [error, setError] = useState([])
    const [toggle, setToggle] = useState({})
    let [pieseAutoUnice, setPieseAutoUnice] = useState([])

    const init = () => {
        getTipuriPiese()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setTipPieseAuto(data)
                }
            })         
            getSubtipuriPiese()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    pieseAutoUnice = setPieseAutoUnice(getUniqueListBy(data, "nume"))
                }
            })
    }

    useEffect(() =>{
        init()
    },[])

    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const showSubitpuri = tipId => {
        return(
            pieseAutoUnice.map((piesa, i) => (
                tipId === piesa.tip && 
                <Catalog.Subpiesa key={i}>
                    <ShowImage dimension = {'35px'} item={piesa} url="subtipPieseAuto"/>
                    <Catalog.SubpiesaTitle  to={`${ROUTES.alegePiesa}/${piesa._id}`} >{piesa.nume}</Catalog.SubpiesaTitle>
                </Catalog.Subpiesa>
                
            )
        )
        )
    }

    return(
        dimension === "big" ?
        <Catalog>
          {tipPieseAuto.map((tip,i) => (
              <Catalog.Card key={i}>
                <Catalog.SubCard>
                    <Catalog.Info>
                        <ShowImage dimension = {'55px'} item={tip} url="tipPieseAuto"/>
                        <Catalog.Title>{tip.nume}</Catalog.Title>
                    </Catalog.Info>
                    <Catalog.Extension 
                        
                        
                    />
                    
                </Catalog.SubCard>
                <Catalog.Body>
                    {showSubitpuri(tip._id)}
                </Catalog.Body>
              </Catalog.Card>
              
          ))}
        </Catalog>:
        <Catalog>
            <Catalog.TitleMain to={ROUTES.alegePiesa}>
                CATEGORII PIESE AUTO
            </Catalog.TitleMain>
            <Catalog.ContainerSmall>
        {tipPieseAuto.map((tip,i) => (
              <Catalog.Card key={i} style={{marginRight: "1.5em"}}>
                    <Catalog.Info>
                        <ShowImage dimension = {'65px'} item={tip} url="tipPieseAuto"/>
                        <Catalog.Title>{tip.nume}</Catalog.Title>
                    </Catalog.Info>
              </Catalog.Card> 
          ))}
          </Catalog.ContainerSmall>
        </Catalog>
    )
}

export default CatalogContainer