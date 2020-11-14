import {API} from "../constants/config"
import queryString from "query-string"

export const getMarciAuto = () => {
    return fetch(`${API}/marciAuto`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getModeleAutoByMarca = marcaAutoId => {
    return fetch(`${API}/modelAuto/by/marca/${marcaAutoId}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getTipuriPiese = () => {
    return fetch(`${API}/tipuriPieseAuto`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getSubtipuriPiese = () => {
    return fetch(`${API}/subtipuriPieseAuto`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getPieseByTip = tipId => {
    return fetch(`${API}/subtipPieseAuto/by/tip/${tipId}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}



export const listRelatedByName = (piesaId) => {
    return fetch(`${API}/subtipPieseAuto/related/${piesaId}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getDistribuitori = () => {
    return fetch(`${API}/distribuitoriAll`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getDistribuitoriById = distribuitorId => {
    return fetch(`${API}/distribuitori/${distribuitorId}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const searchPiese = params => {
    const query = queryString.stringify(params)
    console.log(query)
    return fetch(`${API}/subtipuriPieseAuto/search/?${query}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getBraintreeClienToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}