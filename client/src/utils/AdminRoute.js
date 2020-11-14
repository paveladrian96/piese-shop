import React from "react"
import {Route, Redirect} from "react-router-dom"
import { isAutheticated} from "../apiFunctions/auth"

const AdminRoute = ({component: Component, ...rest}) =>{
    return(
        <Route 
            {...rest} 
            render={props => 
                isAutheticated() && isAutheticated().user.role ? (
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

export default AdminRoute