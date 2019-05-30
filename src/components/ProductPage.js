import React from 'react';
import ProductCard from "./ProductCard";
import Gallery from "./Gallery";
import { productsPath } from '~/src/helpers/routes'

import request from 'superagent'

import { space, environment, accessToken} from '~/src/constants/Contentful'


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
    //console.log(this.state.product);
    return (
      <div className='container'>
        <h1 className={'mt-3'}>Product Page</h1>
        <hr/>
        {  this.state.isLoading ? <p>Loading product Info...</p> : <ProductCard product={this.state.product}/> }
        { !this.state.isLoading && <Gallery images={this.state.product.images} productId={this.state.product.id}/> }
      </div>
    )
  }

}

export default ProductPage;