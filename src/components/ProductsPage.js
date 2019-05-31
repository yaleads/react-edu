import React from 'react';
import ProductsPageView from '~/src/components/ProductsPageView'
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
    const { products } = this.state;
    const alertText = this.props.location.state && this.props.location.state.errorMessage;
    return (
      <ProductsPageView products={products} sliderProducts={products} alertText={alertText} />
    )
  }
}

export default ProductsPage;