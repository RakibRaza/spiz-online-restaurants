import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import cartBg from '../../../images/cart-bg.jpg'
const useStyles = makeStyles(theme => ({
  root: {
    background: `url(${cartBg}) no-repeat center/cover`,
    '& h3': {
      padding: theme.spacing(15, 0),
      marginTop: '64px',
      color: '#fff'
    }
  }
}))
const CartHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <Typography variant='h3'>Cart</Typography>
      </Container>
    </div>
  )
}

export default CartHeader
