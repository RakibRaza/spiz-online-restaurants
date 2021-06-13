import { ADD_TO_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE_FROM_CART } from "./cartAction"
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
        food = { ...food, quantity: food.quantity + 1 }
      }
      return food
    })
    return { ...state, foods: newFoods }
  }
  if (action.type === DECREASE) {
    const newFoods = state.foods.map(food => {
      if (food.id === action.payload) {
        if (food.quantity === 1) {
        } else {
          food = { ...food, quantity: food.quantity - 1 }
        }
      }
      return food
    })
    return { ...state, foods: newFoods }
  }
  if (action.type === ADD_TO_CART) {
    return { ...state, cart: [...state.cart, action.payload] }
  }
  if (action.type === REMOVE_FROM_CART) {
    const newCart = state.cart.filter(item => item.id !== action.payload)

    return { ...state, cart: newCart }
  }

  if (action.type === GET_TOTALS) {
    const { quantity, totalAmount } = state.cart.reduce((total, acc) => {
      const { quantity, price } = acc
      const itemTotal = quantity * price

      total.totalAmount += itemTotal
      total.quantity += quantity

      return total
    }, {
      quantity: 0, totalAmount: 0
    })

    return { ...state, quantity, totalAmount }
  }


  return state
}
export default cartReducer