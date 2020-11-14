import React from "react"
import {Route, Redirect} from "react-router-dom"
import { isAutheticated} from "../apiFunctions/auth"

const PrivateRoute = ({component: Component, ...rest}) =>{
    return(
        <Route 
            {...rest} 
            render={props => 
                isAutheticated() ? (
                    <Component { ...props} />
                ) : (
                    <Redirect 
                        to={{
                            pathname: '/register', 
                            state:{from: props.location}
                            }}
                    />
                ) 
            }
        />         
    )
}

export default PrivateRoute