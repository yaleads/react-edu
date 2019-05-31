import React from 'react';
import { productsPath } from '~/src/helpers/routes'
import { getProduct } from '~/src/components/getData'
import ProductPageView from './ProductPageView'

class ProductPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true, product: {} };
  }

  componentDidMount() {
    getProduct(this.props.id)
      .then( product => this.setState( { isLoading: false, product: product } ) )
      .catch( () => {
        this.props.history.push({
          pathname: productsPath(),
          state: { errorMessage: 'ProductPage not found' }
        });
      } )
  }


  render () {
    return <ProductPageView isLoading={this.state.isLoading} product={this.state.product} />
  }

}

export default ProductPage;