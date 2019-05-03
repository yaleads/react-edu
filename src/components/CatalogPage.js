import React, { Fragment } from 'react'
import Products from '~/src/constants/Products'
import ProductCatalog from '~/src/components/ProductCatalog';
import Cart from '~/src/components/Cart';
import cartContext from '~/cartContext';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: Products(), cart: [] };
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (product_id) {
    this.setState((prevState) => {
      const item = prevState.cart.find(item => item.id === product_id);

      if (item === undefined) {
        return ({ cart: [...prevState.cart, {id: product_id, count: 1}] })
      }
      else
      {
        return ({ cart: prevState.cart.map(i => (
          {
            id: i.id,
            count: i.count + (i.id === product_id ? 1 : 0)
          }))
        });
      }
    });
  }

  render() {
    return (
      <cartContext.Provider value={{ products: this.state.products, cart: this.state.cart, addToCart: this.addToCart }}>
        <Fragment>
          <Cart />
          <hr />
          <ProductCatalog products={this.state.products} />
          <hr />
          <Cart />
        </Fragment>
      </cartContext.Provider>
    )
  }
}

export default CatalogPage;