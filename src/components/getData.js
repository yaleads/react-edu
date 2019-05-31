import request from 'superagent';

const space = 'g7q8snx9jra2';
const environment = 'master';
const accessToken = 'pVBy5AYglq6O9vq_Otzu-uiWcbigl5nu9O85qdTlfVQ';

export const getProducts = () => (
  request
    .get(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`)
    .query({'content_type': 'product'})
    .then( ( { body: { items } }) => {
        let products = [];
        items.forEach( item => ( products.push(item.fields) ));

        return products;
      }
    )
);

export const getProduct = (productId) => (
  request
    .get(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`)
    .query({ 'fields.id': productId })
    .query({'content_type': 'product'})
    .then( ( { body : { items } } ) => items[0].fields )

);

