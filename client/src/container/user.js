import React, {useState, useEffect} from "react"
import { User } from "../components"
import * as ROUTES from "../constants/routes"
import {isAutheticated} from "../apiFunctions/auth"
import {getPurchaseHistory} from "../apiFunctions/user"
import moment from "moment"

export function UserContainer() {

    const {user, token} = isAutheticated()
    const [history, setHistory] = useState([])


    const init = (token, userId) => {
        getPurchaseHistory(token, userId)
            .then(data => {
                if(data.err) {
                    console.log(data.err)
                } else {
                    setHistory(data)
                }
            })
    }

    useEffect(()=> {
        init(token, user._id)
    },[])

    const purchaseHistory = history => {
        return (

                <ul className="list-group">
                    <li className="list-group-item">
                        {history.map((h, i) => {
                            return (
                                <div key={i}>
                                    <hr />
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <h6>Numele piesei: {p.nume}</h6>
                                                <h6>Pretul piesei: ${p.pret}</h6>
                                                <h6>
                                                    Data achizitie:{" "}
                                                    {moment(p.createdAt).fromNow()}
                                                </h6>
                                                <br />
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
        );
    };



    return(
        <User>
            <User.Title>
                Buna ziua, {user.nume}!
            </User.Title>
            <User.Content>
            <User.Left>
                <User.Card>
                    <User.Subtitle>
                        Actiunile mele
                    </User.Subtitle>
                    <User.Link to={ROUTES.cart}>
                        Cosul meu
                    </User.Link>
                    <User.Link to={ROUTES.HOME}>
                        Update profilul meu
                    </User.Link>
                </User.Card>
            </User.Left>
            <User.Right>
                <User.Card>
                    <User.Subtitle>
                        Informatiile mele
                    </User.Subtitle>
                    <User.Paragraph>
                        {user.nume}
                    </User.Paragraph>
                    <User.Paragraph>
                        {user.email}
                    </User.Paragraph>
                    <User.Paragraph>
                        { user.role === 1 ? "Admin" : "Inregistrat"}
                    </User.Paragraph>
                </User.Card>
                <User.Card>
                    <User.Subtitle>
                        Istoria achizitiilor
                    </User.Subtitle>
                    {purchaseHistory(history)}
                </User.Card>
            </User.Right>
            </User.Content>
        </User>
    )
}