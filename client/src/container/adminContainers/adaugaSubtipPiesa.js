import React, {useState, useEffect} from "react"
import { Add } from "../../components"
import { isAutheticated} from "../../apiFunctions/auth"
import {createSubtipPiesaAuto} from "../../apiFunctions/adminManager"
import {getTipuriPiese} from "../../apiFunctions/getProducts"

export function AdaugaSubtipPiesaContainer() {

    const {user, token} = isAutheticated()
    const [values, setValues] = useState({
        nume: '',
        photo:'',
        tip: '',
        distribuitor: '',
        pret: '',
        cantitate: '',
        cod_produs: '',
        specificatii: '',
        tipuriPiese: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const {nume, formData,
            distribuitor, pret, cantitate, cod_produs, specificatii, tipuriPiese} = values

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
            }
        })
    }


    useEffect(() => {
        init()
    },[])

    const handleChange = name => event => {
        const value = name  === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value, error: false}) 
    
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error:'', loading:true})
        console.log(values)

        createSubtipPiesaAuto(user._id, token, formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        distribuitor: '',
                        photo: '',
                        loading: false,
                        createdProduct: data.nume
                    })
                }
            })
        
    }
    return(
        <Add>
            <Add.Title>
                Adauga piesa auto noua
            </Add.Title>
            <Add.Form
                onSubmit={clickSubmit}    
            >
                <Add.Label>
                    Alegeti tipul piesei
                </Add.Label>
                <Add.Select
                onChange={handleChange('tip')}
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
                <Add.Label>
                    Adauga numele piesei auto
                </Add.Label>
                <Add.Input
                    type="text"
                    onChange={handleChange('nume')}
                    value={nume}
                 />
                 <Add.Label>
                    Adauga distribuitorul piesei auto
                </Add.Label>
                <Add.Input
                    type="text"
                    onChange={handleChange('distribuitor')}
                    value={distribuitor}
                 />
                 <Add.Label>
                     Adauga pretul piesei auto
                 </Add.Label>
                 <Add.Input
                    type="text"
                    onChange={handleChange('pret')}
                    value={pret}
                 >               
                 </Add.Input>
                 <Add.Label>
                     Adauga cantitatea de piese auto
                 </Add.Label>
                 <Add.Input
                    type="text"
                    onChange={handleChange('cantitate')}
                    value={cantitate}
                 >   
                 </Add.Input>
                 <Add.Label>
                     Adauga codul piesei auto
                 </Add.Label>
                 <Add.Input
                    type="text"
                    onChange={handleChange('cod_produs')}
                    value={cod_produs}
                 >   
                 </Add.Input>
                 <Add.Label>
                     Adauga specificatiile piesei auto
                 </Add.Label>
                 <Add.Input
                    type="text"
                    onChange={handleChange('specificatii')}
                    value={specificatii}
                 >   
                 </Add.Input>
                <Add.Label>
                    Adauga imaginea piesei auto
                </Add.Label>
                <Add.Input 
                    type="file"
                    onChange={handleChange('photo')}
                    name="photo"
                    accept="image/*"
                />
                <Add.Submit>
                    Adauga piesa auto
                </Add.Submit>
            </Add.Form>

        </Add>
    )

}