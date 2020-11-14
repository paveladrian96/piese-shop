import React, {useState, useEffect} from "react"
import { Add } from "../../components"
import { isAutheticated} from "../../apiFunctions/auth"
import {createDistribuitor} from "../../apiFunctions/adminManager"

export function AdaugaDistribuitorContainer() {

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
        console.log(values)
        setValues({...values, error:'', loading:true})

        createDistribuitor(user._id, token, formData)
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
                Adauga Distribuitor
            </Add.Title>
            <Add.Form
                onSubmit={clickSubmit}    
            >
                <Add.Label>
                    Adauga numele distribuitorului
                </Add.Label>
                <Add.Input
                    type="text"
                    onChange={handleChange('nume')}
                    value={nume}
                 />
                <Add.Label>
                    Adauga imaginea distribuitorului
                </Add.Label>
                <Add.Input 
                    type="file"
                    onChange={handleChange('photo')}
                    name="photo"
                    accept="image/*"
                />
                <Add.Submit>
                    Adauga distribuitorul
                </Add.Submit>
            </Add.Form>

        </Add>
    )

}