import React, { Component, Fragment } from 'react'
import cartContext from '~/cartContext';
import Cart from '~/src/components/Cart';
import Products from '~/src/constants/Products'

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { products: Products(), cart: [] };
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (productId, count) {
    this.setState((prevState) => {
      const item = prevState.cart.find(item => item.id === productId);

      if (item === undefined) {
        // значит такого товара в корзине еще нет
        return ({ cart: [...prevState.cart, {id: productId, count: count}] })
      }
      else
      {
        // такой товар в корзине уже есть
        return ({ cart: prevState.cart.map(i => (
            {
              id: i.id,
              count: i.count + (i.id === productId ? count : 0)
            }))
        });
      }
    });
  }

  render() {
    const cartItemCounter = this.state.cart.reduce((partialSum, i) => partialSum + i.count, 0);

    return (
      <cartContext.Provider value={{ products: this.state.products, cart: this.state.cart, addToCart: this.addToCart, cartItemCounter: cartItemCounter }}>
        <Fragment>
          <Cart />
          { this.props.children }
        </Fragment>
      </cartContext.Provider>
    )
  }
}

export default CartContainer;
