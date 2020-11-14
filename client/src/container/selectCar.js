import React, {useState, useEffect} from  "react"
import { getMarciAuto, getModeleAutoByMarca } from "../apiFunctions/getProducts"
import { SelectCar } from "../components"
import * as ROUTES from "../constants/routes"

export function SelectCarContainer(){

    const [marciAuto, setMarciAuto] = useState([])
    const [modeleAuto, setModeleAuto] = useState([])
    const [error, setError] = useState([])
    const [toggle, setToggle] = useState(0)
    const [modelSelectat, setModelSelectat] = useState('')
    const [values, setValues] = useState({
        motoare: ["diesel", "benzina"],
        marcaAutoSelectata: '',
        modelAutoSelectat: '',
        motor: ''
    })

    const {marcaAutoSelectata, modelAutoSelectat, motor, motoare} = values

    const init = () => {
        getMarciAuto()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setMarciAuto(data)
                }
            })
    }

    useEffect(() =>{
        init()
    },[])

    const handleChangeMarca = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value}) 
        getModele(event.target.value)
    }


    const handleChange = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value}) 
    }

    const getModele = (marcaAutoId) => {
        getModeleAutoByMarca(marcaAutoId)
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setModeleAuto(data)
                }
            })
        
    }
    
    const showSteps = () =>{
        return(
            <SelectCar.StepsRow>
                <SelectCar.StepsColumn>
                    {marcaAutoSelectata ? 
                    <SelectCar.StepsImg src={require("../images/logos/step.png")}/>:
                    <SelectCar.StepsImg invert=".9" src={require("../images/logos/step.png")}/>}
                    <SelectCar.StepsText>
                        Selectati marca
                    </SelectCar.StepsText>
                </SelectCar.StepsColumn>
                <SelectCar.StepsColumn>
                    {modelAutoSelectat ? 
                    <SelectCar.StepsImg src={require("../images/logos/step.png")}/>:
                    <SelectCar.StepsImg invert=".9" src={require("../images/logos/step.png")}/>}
                    <SelectCar.StepsText>
                        Selectati modelul
                    </SelectCar.StepsText>
                </SelectCar.StepsColumn>
                <SelectCar.StepsColumn>
                    {motor ? 
                    <SelectCar.StepsImg src={require("../images/logos/step.png")}/>:
                    <SelectCar.StepsImg invert=".9" src={require("../images/logos/step.png")}/>}
                    <SelectCar.StepsText>
                        Selectati motorizarea
                    </SelectCar.StepsText>
                </SelectCar.StepsColumn>
            </SelectCar.StepsRow>
        )
    }

    const ShowMarci = marci => {
        return (
            <SelectCar.Select onChange={handleChangeMarca('marcaAutoSelectata')}>
                <SelectCar.Option>Selectati marca auto</SelectCar.Option>
                {marciAuto && 
                        marciAuto.map((marcaAuto, i) => (
                            <SelectCar.Option 
                                key={i}
                                value={marcaAuto._id}
                            >
                                {marcaAuto.nume}
                            </SelectCar.Option>
                        ))}
            </SelectCar.Select>
        )
    }

    const ShowModele = modele => {
        return(
            <SelectCar.Select onChange={handleChange('modelAutoSelectat')}>
                <SelectCar.Option>Selectati modelul auto</SelectCar.Option>
                {modele && 
                        modele.map((modelAuto, i) => (
                            <SelectCar.Option 
                                key={i}
                                value={modelAuto._id}
                            >
                                {modelAuto.nume} ({modelAuto.descriere})
                                ({modelAuto.anAparitie}-{modelAuto.anDisparitie})
                            </SelectCar.Option>
                        ))}
            </SelectCar.Select>
        )
    }
    
    const ShowMotor = modele => {
        return (
            <SelectCar.Select onChange={handleChange('motor')}>
                <SelectCar.Option>Selectati motorul auto</SelectCar.Option>
                {modele && motoare && 
                        motoare.map((motor, i) => (
                            <SelectCar.Option 
                                key={i}
                                value={motor}
                            >
                                {motor}
                            </SelectCar.Option>
                        ))}
            </SelectCar.Select>
        )
    }
    
    const reset = () => {
        setValues({...values, 
                    motor: '',
                    modelAutoSelectat: '',
                    marcaAutoSelectata: ''}) 
        
    }

    return (
       <SelectCar>
           <SelectCar.StepsRow>
                <SelectCar.Title>
                Selectati tipul autoturismului pentru a gasi piese compatibile
                </SelectCar.Title>
                <SelectCar.StepsImg 
                onClick={reset}
                src={require("../images/logos/reset.png")}/>
            </SelectCar.StepsRow>
            {showSteps()}
            {marciAuto && ShowMarci(marciAuto)}
            {modeleAuto && ShowModele(modeleAuto)}
            {modeleAuto && ShowMotor(modeleAuto)}
            <SelectCar.Button to={ROUTES.alegePiesa} style={motor === '' ? {pointerEvents: "none"} : null}>
                Cauta
            </SelectCar.Button>
       </SelectCar>
    )
}