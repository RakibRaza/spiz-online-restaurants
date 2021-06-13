import React from 'react'
import CartHeader from '../components/Cart/CartHeader/CartHeader'
import CartTable from '../components/Cart/CartTable/CartTable'
import NavBar from '../components/NavBar/NavBar'

const Cart = () => {
  return (
    <>
      <NavBar />
      <CartHeader />
      <CartTable />
    </>
  )
}

export default Cart
