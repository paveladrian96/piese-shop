import React, {useState, useEffect} from  "react"
import { getDistribuitori} from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Car } from "../components"
import * as ROUTES from "../constants/routes"

export function AlegeProducatorContainer({dimension="big"}){

    const [distribuitori, setDistribuitori] = useState([])
    const [modeleAuto, setModeleAuto] = useState([])
    const [error, setError] = useState([])
    const [toggle, setToggle] = useState(0)


    const init = () => {
        console.log(`${dimension}`)
        getDistribuitori()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setDistribuitori(data)
                }
            })
    }

    useEffect(() =>{
        init()
    },[])

    const showDistribuitori = () => {
        return (
            <Car>
                <Car.TitleLink to={ROUTES.alegeProducatori}>
                    Alege producatori
                </Car.TitleLink>
            {dimension === "big" ?
             <Car.MarciAuto>
                {distribuitori.map((d, i) =>(
                <Car.MarciAutoCard key={i}>
                    <ShowImage item={d} url="distribuitori" />
                    <Car.Name>{d.nume}</Car.Name>
                </Car.MarciAutoCard>
                ))}
            </Car.MarciAuto>
             :
             <Car.MarciAutoSmall>
                {distribuitori.map((d, i) =>(
                <Car.MarciAutoCard key={i}>
                    <ShowImage item={d} url="distribuitori" />
                    <Car.Name>{d.nume}</Car.Name>
                </Car.MarciAutoCard>
                ))}
            </Car.MarciAutoSmall>}
        </Car>
        ) 
    }

    return (
        <Car>
            {showDistribuitori()}
        </Car>
    )
}