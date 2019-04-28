import React from 'react'
import Products from '~/src/constants/Products'
import ProductCatalog from "./ProductCatalog";

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: Products() };
  }

  render() {
    return (
      <div>
        <ProductCatalog products={this.state.products} />
      </div>
    )
  }
}

export default CatalogPage;
