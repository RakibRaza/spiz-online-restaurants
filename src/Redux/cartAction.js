export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const GET_TOTALS = 'GET_TOTALS'

export const increase = (id) => {
  return { type: INCREASE, payload: id }
}
export const decrease = (id) => {
  return { type: DECREASE, payload: id }
}
export const addToCart = (item) => {
  return { type: ADD_TO_CART, payload: item }
}
export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, payload: id }
}
export const getTotals = () => {
  return { type: GET_TOTALS }
}