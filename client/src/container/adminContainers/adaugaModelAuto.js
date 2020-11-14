import React, {useState, useEffect} from "react"
import { Add } from "../../components"
import { isAutheticated} from "../../apiFunctions/auth"
import {createModelAuto} from "../../apiFunctions/adminManager"
import {getMarciAuto} from "../../apiFunctions/getProducts"

export function AdaugaModelContainer() {

    const {user, token} = isAutheticated()
    const [values, setValues] = useState({
        tipuriCaroserie: ['berlina', 'cabrio', 'combi', 'coupe', 'hatchback' ],
        tipMotor: ['diesel', 'benzina'],
        nume: '',
        photo:'',
        anAparitie: '',
        anDisparitie: '',
        descriere: '',
        caroserie: '',
        motor: '',
        marcaAuto: '',
        marciAuto: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const {nume,  formData,
            anAparitie, anDisparitie,  marciAuto, 
            tipuriCaroserie, tipMotor, descriere} = values

    const init = () => {
        getMarciAuto()
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values, 
                    marciAuto: data, 
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

        createModelAuto(user._id, token, formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        nume: '',
                        anAparitie: '',
                        anDisparitie: '',
                        photo: '',
                        motor: '',
                        descriere: '',
                        caroserie: '',
                        loading: false,
                        createdProduct: data.nume
                    })
                }
            })
        
    }
    return(
        <Add>
            <Add.Title>
                Adauga Model auto
            </Add.Title>
            <Add.Form
                onSubmit={clickSubmit}    
            >
                <Add.Label>
                    Alegeti marca auto
                </Add.Label>
                <Add.Select
                onChange={handleChange('marcaAuto')}
                >
                    <Add.Option>Alegeti marca auto</Add.Option>
                    {marciAuto && 
                        marciAuto.map((marcaAuto, i) => (
                            <Add.Option 
                                key={i}
                                value={marcaAuto._id}
                            >
                                {marcaAuto.nume}
                            </Add.Option>
                        ))}
                </Add.Select>
                <Add.Label>
                    Alegeti tipul de caroserie al modelului auto
                </Add.Label>
                <Add.Select onChange={handleChange('caroserie')}>
                    <Add.Option>Alegeti tipul de caroserie al modelului auto</Add.Option>
                    {tipuriCaroserie &&
                        tipuriCaroserie.map((tip, i) => (
                            <Add.Option
                                key={i}
                                value={tip}
                            >
                                {tip}
                            </Add.Option>
                        ))}
                </Add.Select>
                <Add.Label>
                    Alegeti tipul motorului al modelului auto
                </Add.Label>
                <Add.Select onChange={handleChange('motor')}>
                    <Add.Option>Alegeti tipul motorului al modelului auto</Add.Option>
                    {tipMotor &&
                        tipMotor.map((tip, i) => (
                            <Add.Option
                                key={i}
                                value={tip}
                            >
                                {tip}
                            </Add.Option>
                        ))}
                </Add.Select>
                <Add.Label>
                    Adauga numele modelului auto
                </Add.Label>
                <Add.Input
                    type="text"
                    onChange={handleChange('nume')}
                    value={nume}
                 />
                 <Add.Label>
                    Adauga serie model (Optional)
                </Add.Label>
                <Add.Input
                    type="text"
                    onChange={handleChange('descriere')}
                    value={descriere}
                 />
                 <Add.Label>
                     Adauga anul aparitie
                 </Add.Label>
                 <Add.Input
                    type="text"
                    onChange={handleChange('anAparitie')}
                    value={anAparitie}
                 >               
                 </Add.Input>
                 <Add.Label>
                     Adauga ultimul an de productie al modelului 
                 </Add.Label>
                 <Add.Input
                    type="text"
                    onChange={handleChange('anDisparitie')}
                    value={anDisparitie}
                 >   
                 </Add.Input>
                <Add.Label>
                    Adauga imaginea modelului auto
                </Add.Label>
                <Add.Input 
                    type="file"
                    onChange={handleChange('photo')}
                    name="photo"
                    accept="image/*"
                />
                <Add.Submit>
                    Adauga marca auto
                </Add.Submit>
            </Add.Form>

        </Add>
    )

}