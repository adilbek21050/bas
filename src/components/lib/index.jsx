import {ADD_TO_BASKET, ADD_TO_FAVORITE, CURREN_Q, DEC_BASKET, DELETE_BASKET} from "../UL";





export const addToBasket = (el) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const fount = basket.find(item => item.id === el.id)
    if (fount) {
        basket = [...basket.map(item => el.id === item.id ? {...el, quantity: el.quantity +1} : el)]
    } else {
        basket = [...basket, {...el, quantity: 1}]
    }
    localStorage.setItem("basket" , JSON.stringify(basket))
    return {type: ADD_TO_BASKET, payload: el}
}
export const decBas = (el) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.map(item => {
        if (item.id === el.id) {
            if (el.quantity > 1) {
                return {...el, quantity: el.quantity -1}
            } else return el
        } else return el
    })
    localStorage.setItem("basket" , JSON.stringify(basket))
    return {type: DEC_BASKET, payload: el}
}

export const delBas = (el) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.filter(item => item.id !== el.id)
    localStorage.setItem("basket" , JSON.stringify(basket))
    return {type: DELETE_BASKET, payload: el}
}




// fav
export const addToFav = (el) => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || []
    const fount = favorite.find(item => item.id === el.id)
    if (fount) {
        favorite = favorite.filter(item => item.id !== el.id)
    } else {
        favorite = [...favorite, el]
    }
    localStorage.setItem("favorite", JSON.stringify(favorite))
    return {type: ADD_TO_FAVORITE, payload: el}
}
// curr

export const handleChange = (e) => {
    const optionState = e.target.value
    localStorage.setItem("curren" , optionState)
    return {type: CURREN_Q, payload: e}
}

