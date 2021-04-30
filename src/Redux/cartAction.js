export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const ADD_TO_CART = 'ADD_TO_CART'

export const increase = (id) => {
  return { type: INCREASE, payload: id }
}
export const decrease = (id) => {
  return { type: DECREASE, payload: id }
}
export const addToCart = (id) => {
  return { type: ADD_TO_CART, payload: id }
}