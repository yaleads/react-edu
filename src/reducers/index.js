import { combineReducers } from 'redux'

import cart     from './Cart'
import product  from './Product'
import products from './Products'

export default combineReducers({
  products,
  product,
  cart
})