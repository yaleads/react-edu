import React from 'react';
import ProductsPageView from './ProductsPageView'
import { getProducts } from '~/src/components/getData'

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    getProducts().then( products => this.setState( { products } ) )
  }

  render() {
    const { products } = this.state;
    const alertText = this.props.location.state && this.props.location.state.errorMessage;
    return (
      <ProductsPageView products={products} sliderProducts={products} alertText={alertText} />
    )
  }
}

export default ProductsPage;