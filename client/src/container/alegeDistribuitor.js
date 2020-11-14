import React, {useState} from  "react"
import { Distribuitor} from "../components"
import CatalogContainer from "./catalog"
import PiesaContainer from "./piesa"

export function AlegeDistribuitorContainer ({props}){

    const [piesaNume, setPiesaNume] = useState('')

    const getPiesaNume = (nume) => {
        setPiesaNume(nume)
    }
    

    return(
        <Distribuitor>
            <Distribuitor.Catalog>
                <Distribuitor.Title>
                    Catalog Classic Store
                </Distribuitor.Title>
                <CatalogContainer />
            </Distribuitor.Catalog>
            <Distribuitor.Piese>
                <Distribuitor.Title>
                   Oferte actuale pentru  {piesaNume}
                </Distribuitor.Title>
                <PiesaContainer piesaId={props.match.params.piesaId} getPiesaNume={getPiesaNume}/>
            </Distribuitor.Piese>
        </Distribuitor>
    )
}