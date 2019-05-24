import React from 'react';
import ProductsList from '~/src/components/ProductsList'
import Products from '~/src/constants/Products'
import Alert from '~/src/components/Alert'


class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: Products() };
  }

  render() {
    return (
      <div className='container'>
        <Alert text={ this.props.location.state && this.props.location.state.errorMessage }/>

        <h1 className={'mt-3'}>Products Catalog</h1>
        <hr />

        <ProductsList products={this.state.products} />
      </div>
    )
  }
}

export default ProductsPage;