import {API} from "../constants/config"

export const createMarcaAuto = (userId, token, marcaAuto) => {
    return fetch(`${API}/marcaAuto/create/${userId}`, {
         method: "POST",
         headers: {
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: marcaAuto
     })
     .then(response => {
         return response.json()
     })
     .catch(err => {
         console.log(err)
     })
}

export const createModelAuto = (userId, token, modelAuto) => {
    return fetch(`${API}/modelAuto/create/${userId}`, {
         method: "POST",
         headers: {
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: modelAuto
     })
     .then(response => {
         return response.json()
     })
     .catch(err => {
         console.log(err)
     })
}

export const createTipPiesaAuto = (userId, token, tipPiesaAuto) => {
    return fetch(`${API}/tipPieseAuto/create/${userId}`, {
         method: "POST",
         headers: {
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: tipPiesaAuto
     })
     .then(response => {
         return response.json()
     })
     .catch(err => {
         console.log(err)
     })
}

export const createSubtipPiesaAuto = (userId, token, subtipPiesaAuto) => {
    console.log(subtipPiesaAuto)
    return fetch(`${API}/subtipPieseAuto/create/${userId}`, {
         method: "POST",
         headers: {
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: subtipPiesaAuto
     })
     .then(response => {
         return response.json()
     })
     .catch(err => {
         console.log(err)
     })
}

export const updateSubtipPiesaAuto = (userId, token, piesaId, subtipPiesaAuto) => {
    return fetch(`${API}/subtipPieseAuto/${piesaId}/${userId}`, {
         method: "PUT",
         headers: {
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: subtipPiesaAuto
     })
     .then(response => {
         return response.json()
     })
     .catch(err => {
         console.log(err)
     })
}

export const createDistribuitor = (userId, token, distribuitor) => {
    
    return fetch(`${API}/distribuitori/create/${userId}`, {
         method: "POST",
         headers: {
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
         },
         body: distribuitor
     })
     .then(response => {
         return response.json()
     })
     .catch(err => {
         console.log(err)
     })
}

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({status, orderId})
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}