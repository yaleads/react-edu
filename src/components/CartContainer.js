import React, { Component, Fragment } from 'react'
import cartContext from '~/cartContext';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (product, count) {
    this.setState((prevState) => {
      const item = prevState.cart.find(item => item.product.id === product.id);

      if (item === undefined) {
        // значит такого товара в корзине еще нет
        return ({ cart: [...prevState.cart, {product: product, count: count}] })
      }
      else
      {
        // такой товар в корзине уже есть
        return ({ cart: prevState.cart.map(i => (
            {
              product: i.product,
              count: i.count + (i.product.id === product.id ? count : 0)
            }))
        });
      }
    });
  }

  render() {
    const cartItemCounter = this.state.cart.reduce((partialSum, i) => partialSum + i.count, 0);

    return (
      <cartContext.Provider value={{ cart: this.state.cart, addToCart: this.addToCart, cartItemCounter: cartItemCounter }}>
        <Fragment>
          { this.props.children }
        </Fragment>
      </cartContext.Provider>
    )
  }
}

export default CartContainer;
