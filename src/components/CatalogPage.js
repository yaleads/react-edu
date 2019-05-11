import React from 'react'
import Products from '~/src/constants/Products'
import ProductCatalog from '~/src/components/ProductCatalog';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: Products() };
  }

  render() {
    return (
      <ProductCatalog products={this.state.products} />
    )
  }
}

export default CatalogPage;
