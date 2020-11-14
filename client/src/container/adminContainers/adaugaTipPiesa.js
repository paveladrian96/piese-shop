import React, {useState, useEffect} from "react"
import { Add } from "../../components"
import { isAutheticated} from "../../apiFunctions/auth"
import {createTipPiesaAuto} from "../../apiFunctions/adminManager"

export function AdaugaTipPiesaContainer() {

    const {user, token} = isAutheticated()
    const [values, setValues] = useState({
        nume: '',
        photo:'',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const {nume, formData} = values

    const init = () => {
       setValues({
            ...values,
            formData: new FormData()
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
        console.log()
        setValues({...values, error:'', loading:true})

        createTipPiesaAuto(user._id, token, formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        nume: '',
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
                Adauga Tip piesa auto
            </Add.Title>
            <Add.Form
                onSubmit={clickSubmit}    
            >
                <Add.Label>
                    Adauga numele tipului piesei auto
                </Add.Label>
                <Add.Input
                    type="text"
                    onChange={handleChange('nume')}
                    value={nume}
                 />
                <Add.Label>
                    Adauga imaginea tipului piesei auto
                </Add.Label>
                <Add.Input 
                    type="file"
                    onChange={handleChange('photo')}
                    name="photo"
                    accept="image/*"
                />
                <Add.Submit>
                    Adauga tipul piesei auto
                </Add.Submit>
            </Add.Form>

        </Add>
    )

}