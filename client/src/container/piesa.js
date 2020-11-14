import React, {useState, useEffect} from  "react"
import {Redirect} from  "react-router-dom"
import { listRelatedByName, getDistribuitoriById, searchPiese } from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Distribuitor} from "../components"
import {addItem } from "../apiFunctions/cartHelpers"
import CardPiesa from "./card"

const PiesaContainer =  ({piesaId, getPiesaNume, piesaNume}) => {

    const [error, setError] = useState(false)
    const [pieseByName, setPieseByName] = useState([])
    const [distribuitori, setDistribuitori] = useState([])
    let [distribuitoriUnici, setDistribuitoriUnici] = useState([])


    const loadPieseRelated = () => {
        listRelatedByName(piesaId)
        .then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setPieseByName(data)
                getPiesaNume(data[0].nume)
                data.map((d) => {
                    getDistribuitoriById(d.distribuitorId)
                        .then(res => {
                            if(res.error){
                                setError(res.error)
                            } else {
                                setDistribuitori(distribuitori => [...distribuitori, res])
                            }
                        })
                })
            }
        })
    }

    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const searchData = () => {
        searchPiese({search: piesaNume || undefined})
            .then(res => {
                if(res.error) {
                    console.log(res.error)
                } else {
                    setPieseByName(res)
                    console.log(res)
                    res.map((d) => {
                        getDistribuitoriById(d.distribuitorId)
                            .then(res => {
                                if(res.error){
                                    setError(res.error)
                                } else {
                                    setDistribuitori(distribuitori => [...distribuitori, res])
                                  
                                }
                            })
                    })
                }
            })
}

    useEffect(()=> {
        if(piesaNume){
            setDistribuitori([])
            searchData() 
        } else {
        setDistribuitori([])
        loadPieseRelated() 
    }
            
    }, [piesaId, piesaNume])

    useEffect (() => {
        setDistribuitoriUnici(getUniqueListBy(distribuitori, "nume"))
    },[distribuitori])

  


    return(
        pieseByName && distribuitori && pieseByName.map((piesa, i) => 
            <CardPiesa key={i} piesa={piesa}  distribuitoriUnici={distribuitoriUnici}/>
        )
    )
}

export default PiesaContainer