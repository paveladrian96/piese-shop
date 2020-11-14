import React, {useState, useEffect} from "react"
import { Add } from "../../components"
import { isAutheticated} from "../../apiFunctions/auth"
import {createSubtipPiesaAuto, updateSubtipPiesaAuto} from "../../apiFunctions/adminManager"
import {getSubtipuriPiese, getDistribuitori} from "../../apiFunctions/getProducts"
import {getTipuriPiese, getPieseByTip} from "../../apiFunctions/getProducts"

export function EditeazaSubtipPiesaContainer() {

    const {user, token} = isAutheticated()

    const [piese, setPiese] = useState([])
    const [load, setLoad] = useState('')
    const [detaliiPiesa, setDetaliiPiesa] = useState([])
    const [error, setError] = useState([])
    const [values, setValues] = useState({
        piesaId: '',
        nume: '',
        tip: '',
        distribuitor: '',
        distribuitori: '',
        photo: '',
        distribuitorId: '',
        detaliiPiesa: '',
        pret: '',
        cantitate: '',
        vandute: '',
        reducere: '',
        cod_produs: '',
        specificatii: '',
        tipuriPiese: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const {nume, formData, distribuitorId, piesaId, distribuitori,
            distribuitor, pret, cantitate, cod_produs, specificatii, reducere, vandute, tipuriPiese, tip} = values

    const init = () => {
        getTipuriPiese()
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values, 
                    tipuriPiese: data, 
                    
                    formData: new FormData()
                })
                setLoad("da")
            }
        })
    }

    const loadDistribuitori = () => {
        getDistribuitori()
        .then(data2 => {
            if(data2.error) {
                setValues({...values, error: data2.error})
            } else {
                setValues({
                    ...values, 
                    distribuitori: data2, 
                })
                console.log(data2)
            }
        })
    }
   


    useEffect(() => {
        init()
        
    },[])

    useEffect(() => {
        loadDistribuitori()
        
    },[load])


    const getPiese = (tipId) => {
        getPieseByTip(tipId)
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setPiese(data)
                    console.log(data)
                }
            })
        
    }

    const handleChangeTipPiesa = name => event => {
        const value = event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value, error: false}) 
        getPiese(event.target.value)
        
        console.log(values)
    }

    const handleChangePiesa = event => {
        const value = event.target.value
        console.log(event.target.value)
        piese.map((p) => {
            if(p._id === value){
                setValues({...values, 
                    piesaId: value,
                    nume: p.nume, 
                    reducere: p.reducere,
                    vandute: p.vandute,
                    specificatii: p.specificatii,
                    distribuitor: p.distribuitor,
                    pret: p.pret,
                    cantitate: p.cantitate,
                    cod_produs: p.cod_produs,
                })
                formData.set("nume", p.nume)
                formData.set("reducere", p.reducere)
                formData.set("vandute", p.vandute)
                formData.set("specificatii", p.specificatii)
                formData.set("distribuitor", p.distribuitor)
                formData.set("pret", p.pret)
                formData.set("cantitate", p.cantitate)
                formData.set("cod_produs", p.cod_produs)
            }
           
        })
       
        console.log(values)
    }

    const handleChange = name => event => {
        const value = name  === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value, error: false}) 
        
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error:'', loading:true})
        console.log(values)

        updateSubtipPiesaAuto(user._id, token, piesaId, formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        photo: '',
                        loading: false,
                        createdProduct: data.nume
                    })
                }
            })
        
    }


    const showTipPiese = () => {
        return (
            <Add.Form
                onSubmit={clickSubmit}    
            >
                <Add.Label>
                    Alegeti tipul piesei
                </Add.Label>
                <Add.Select
                onChange={handleChangeTipPiesa('tip')}
                >
                    <Add.Option>Alegeti tipul piesei auto</Add.Option>
                    {tipuriPiese && 
                        tipuriPiese.map((tip, i) => (
                            <Add.Option 
                                key={i}
                                value={tip._id}
                            >
                                {tip.nume}
                            </Add.Option>
                        ))}
                </Add.Select>
            </Add.Form>
        )
    }

    const showPiese = piese => {
        return (
            <Add.Form
                onSubmit={clickSubmit}    
            >
                <Add.Label>
                    Alegeti piesa
                </Add.Label>
                <Add.Select
                onChange={(event) => handleChangePiesa(event)}
                >
                    <Add.Option>Alegeti tipul piesei auto</Add.Option>
                    {piese && 
                        piese.map((piesa, i) => (
                            <Add.Option 
                                key={i}
                                value={piesa._id}
                            >
                                {piesa.nume} {piesa.distribuitor}
                            </Add.Option>
                        ))}
                </Add.Select>
                <Add.Label>
                    Alegeti distribuitorul
                </Add.Label>
                <Add.Select
                onChange={handleChange("distribuitorId")}
                >
                    <Add.Option>Alegeti distribuitorul piesei auto</Add.Option>
                    {distribuitori && 
                        distribuitori.map((d, i) => (
                            <Add.Option 
                                key={i}
                                value={d._id}
                            >
                                {d.nume}
                            </Add.Option>
                        ))}
                </Add.Select>
                <Add.Submit>
                    Editeaza piesa auto
                </Add.Submit>
                <Add.Label>
                    Numele piesei
                </Add.Label>
                <Add.Input
                            onChange={handleChange('nume')}
                            value={nume}
                 />
                 <Add.Label>
                    Reducere
                </Add.Label>
                <Add.Input
                            onChange={handleChange('reducere')}
                            value={reducere}
                 />
                 <Add.Label>
                    Vandute
                </Add.Label>
                <Add.Input
                            onChange={handleChange('vandute')}
                            value={vandute}
                 />
                 <Add.Label>
                    Specificatii
                </Add.Label>
                <Add.Input
                            onChange={handleChange('specificatii')}
                            value={specificatii}
                 />
                 <Add.Label>
                            Distribuitor
                </Add.Label>
                <Add.Input
                            onChange={handleChange('distribuitor')}
                            value={distribuitor}
                 />
                 <Add.Label>
                    Pret
                </Add.Label>
                <Add.Input
                            onChange={handleChange('pret')}
                            value={pret}
                 />
                 <Add.Label>
                    Cantitate
                </Add.Label>
                <Add.Input
                            onChange={handleChange('cantitate')}
                            value={cantitate}
                 />
                 <Add.Label>
                    Cod produs
                </Add.Label>
                <Add.Input
                            onChange={handleChange('cod_produs')}
                            value={cod_produs}
                 />
                
                 <Add.Submit>
                    Editeaza piesa auto
                </Add.Submit>
            </Add.Form>
        )
    }

   
    
    return(
        <Add>
            <Add.Title>
                Editeaza piesa auto noua
            </Add.Title>
            {tipuriPiese && showTipPiese()}
            {piese && showPiese(piese)}

        </Add>
    )

}