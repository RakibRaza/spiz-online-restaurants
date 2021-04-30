import { ADD_TO_CART, DECREASE, INCREASE } from "./cartAction"
import data from '../data/foodCollection'
const initialStore = {
  foods: data,
  cart: [],
  quantity: 0,
  totalAmount: 0,
}

const cartReducer = (state = initialStore, action) => {
  if (action.type === INCREASE) {
    const newFoods = state.foods.map(food => {
      if (food.id === action.payload) {
        food.quantity += 1
      }
      return food
    })
    return { ...state, foods: newFoods }
  }
  if (action.type === DECREASE) {
    const newFoods = state.foods.map(food => {
      if (food.id === action.payload) {
        if (food.quantity === 1) {
          food.quantity = 1
        } else {
          food.quantity -= 1
        }
      }
      return food
    })
    return { ...state, foods: newFoods }
  }
  if (action.type === ADD_TO_CART) {
    const newCart = state.foods.filter(food => food.id === action.payload)

    return { ...state, cart: [...state.cart, ...newCart] }
  }


  return state
}
export default cartReducer