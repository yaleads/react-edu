import React from 'react';
import { productsPath } from '~/src/helpers/routes'
import request from 'superagent'
import { space, environment, accessToken} from '~/src/constants/Contentful'
import ProductPageView from './ProductPageView'

class ProductPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true, product: {} };
  }

  componentDidMount() {
    request
      .get(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`)
      .query({ 'fields.id': this.props.id })
      .query({'content_type': 'product'})
      .then( ( { body : { items } } ) => this.setState( { isLoading: false, product: items[0].fields } ) )
      .catch( () => {
        this.props.history.push({
          pathname: productsPath(),
          state: { errorMessage: 'Product not found' }
        });
      } )
  }


  render () {
    return <ProductPageView isLoading={this.state.isLoading} product={this.state.product} />
  }

}

export default ProductPage;