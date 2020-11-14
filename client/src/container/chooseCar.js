import React, {useState, useEffect} from  "react"
import { getMarciAuto, getModeleAutoByMarca } from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Car } from "../components"
import * as ROUTES from "../constants/routes"

export function ChooseCarContainer({dimension="big"}){

    const [marciAuto, setMarciAuto] = useState([])
    const [modeleAuto, setModeleAuto] = useState([])
    const [error, setError] = useState([])
    const [toggle, setToggle] = useState(0)
    const [modelSelectat, setModelSelectat] = useState('')
    const [caroserie, setCaroserie] = useState(['berlina', 'coupe', 'cabrio', 'combi', 'hatchback'])


    const init = () => {
        console.log(`${dimension}`)
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

    const handleClick = (marcaAutoId) => {
        setToggle(1)
        getModeleAutoByMarca(marcaAutoId)
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setModeleAuto(data)
                }
            })
            
    }

    const showSubModels = () => {

        return (
               caroserie.map((c, i) => (
                    <div key={i}>
                 <Car.Caroserie>Caroserie: {c}</Car.Caroserie>
                <Car.MarciAuto>
               
                {modelSelectat && modeleAuto && modeleAuto.map((modelAuto, i) => (
                    modelAuto.nume === modelSelectat && 
                        modelAuto.caroserie === c && 
                        <Car.MarciAutoCard
                            key={i}
                            to={ROUTES.alegePiesa}
                        >  
                            <ShowImage item={modelAuto} url="modelAuto"/>
                            <Car.Name style={{fontWeight: "700"}}>{modelAuto.nume} [{modelAuto.descriere}]</Car.Name>
                            <Car.Name >{modelAuto.anAparitie}-{modelAuto.anDisparitie}</Car.Name>
                        </Car.MarciAutoCard>
                ))}
            </Car.MarciAuto>
            </div>
               ))
        )
    }

    const showModels = () => {
        var models = modeleAuto.map(function(obj) { return (obj.nume); });
        models = models.filter(function(v,i) { return models.indexOf(v) == i; });
        return(
             <Car.MarciAuto>
                {models.map((model, i) => (

                    <Car.MarciAutoCard 
                        key={i}
                        onClick={() =>{setModelSelectat(model)
                                        setToggle(2)    }}
                    >
                       <ShowImage item={model} url="marcaAuto" />
                       <Car.Name>{model}</Car.Name>
                   </Car.MarciAutoCard>
                ))}
            </Car.MarciAuto>
        )
    }

    const showMarci = () => {
        return (
            dimension === "big" ?
             <Car.MarciAuto>
            {marciAuto.map((marcaAuto, i) =>(
               <Car.MarciAutoCard 
                    key={i}
                    onClick={() =>handleClick(marcaAuto._id)}
                >
                   <ShowImage item={marcaAuto} url="marcaAuto" />
                   <Car.Name>{marcaAuto.nume}</Car.Name>
               </Car.MarciAutoCard>
            ))}
        </Car.MarciAuto> :
        <Car.MarciAutoSmall>
            {marciAuto.map((marcaAuto, i) =>(
               <Car.MarciAutoCard 
                    key={i}
                    onClick={() =>handleClick(marcaAuto._id)}
                >
                   <ShowImage item={marcaAuto} dimension = "65px" url="marcaAuto" />
                   <Car.Name>{marcaAuto.nume}</Car.Name>
               </Car.MarciAutoCard>
            ))}
        </Car.MarciAutoSmall> 

        )
    }

    const showTitleCaroussel = () => {
        return (
            <Car.TitleCaroussel>
                {/* First title */}
                {toggle === 0 && <Car.Title style={{borderBottom: "1px solid black"}}>Alege marca auto</Car.Title>}
                 {/* Second title */}
                {toggle === 1 &&
                <> 
                    <Car.Title onClick={()=>setToggle(0)}> Alege marca auto</Car.Title> 
                <Car.Title style={{borderBottom: "1px solid black"}}>Alege modelul auto</Car.Title>
                </> }

                 {/* Third title */}
                {(toggle === 2) &&
                <>
                <Car.Title onClick={()=>setToggle(0)}> Alege marca auto</Car.Title> 
                <Car.Title onClick={()=>setToggle(1)}>Alege modelul auto</Car.Title>
                <Car.Title style={{borderBottom: "1px solid black"}} >Alege caroseria auto</Car.Title>
                </>}
            </Car.TitleCaroussel>
        )
    }

    return (
        <Car>
            {showTitleCaroussel()}
            {toggle === 0 && showMarci()}
            {toggle === 1 && showModels()}
            {toggle === 2 && showSubModels()}
        </Car>
    )
}