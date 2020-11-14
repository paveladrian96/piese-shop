import React, {useState, useEffect} from  "react"
import { getTipuriPiese, getSubtipuriPiese } from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Piesa } from "../components"
import * as ROUTES from "../constants/routes"
import { Piese } from "../components/alegeDistribuitor/styles/alegeDistribuitor"

export function AlegePiesaContainer () {
    const [tipPieseAuto, setTipPieseAuto] = useState([])
    const [pieseAuto, setPieseAuto] = useState([])
    let [pieseAutoUnice, setPieseAutoUnice] = useState([])
    let [pieseAutoUnice2, setPieseAutoUnice2] = useState([])
    const [error, setError] = useState(false)

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
                    setPieseAuto(data)
                    pieseAutoUnice = setPieseAutoUnice(getUniqueListBy(data, "nume"))
                    pieseAutoUnice2 = setPieseAutoUnice2(getUniqueListBy(data, "distribuitor"))
                    
                }
            })
         
    }

    useEffect(() =>{
        init()
    },[])


    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const showPiese = tipPieseId => {
        return (
            pieseAutoUnice.map((piesa, i) => 
                (piesa.tip === tipPieseId && 
                    <Piesa.Subpiesa key={i}>
                    <ShowImage dimension = {'35px'} item={piesa} url="subtipPieseAuto"/>
                    <Piesa.SubtitlePiesa 
                        to={`${ROUTES.alegePiesa}/${piesa._id}`}
                        
                    >{piesa.nume}</Piesa.SubtitlePiesa>
                    </Piesa.Subpiesa>
                )
            )
        )
    }


    return(
        <Piesa>
            <Piesa.Title>
                CLASSIC AUTO CATALOG DE PIESE AUTO
            </Piesa.Title>
            <Piesa.CardContainer>
            
                {tipPieseAuto.map((tip, i) => (
                    <Piesa.Card key={i}>
                        <ShowImage item={tip} url="tipPieseAuto"/>
                        <Piesa.Subtitle>{tip.nume}</Piesa.Subtitle>
                        {showPiese(tip._id)}
                    </Piesa.Card>
                ))}
            
            </Piesa.CardContainer>
         </Piesa>
    )
}