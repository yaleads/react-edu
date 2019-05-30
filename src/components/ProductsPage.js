import React from 'react';
import ProductsList from '~/src/components/ProductsList'
import Alert from '~/src/components/Alert'
import ProductSlider from './ProductsSlider'
import request from 'superagent'

import { space, environment, accessToken} from '~/src/constants/Contentful'

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    request
      .get(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`)
      .query({'content_type': 'product'})
      .then( ( { body: { items } }) => {
          let products = [];
          items.forEach( item => ( products.push(item.fields) ));

          this.setState( { products } );
        }
      )
  }

  render() {
    const products = this.state.products;
    return (
      <div className='container'>
        <Alert text={ this.props.location.state && this.props.location.state.errorMessage }/>

        {products.length > 0 && <ProductSlider products={products}/>}

        <h1 className={'mt-3'}>Products Catalog</h1>
        <hr />

        <ProductsList products={products} />
      </div>
    )
  }
}

export default ProductsPage;