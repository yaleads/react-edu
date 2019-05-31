export const productsPath       = ()                              => '/';
export const cartPath           = ()                              => '/cart';
export const contactsPath       = ()                              => '/contacts';
export const productPath        = (id = ':id')                    => `/products/${id}`;
export const productImagePath   = (id = ':id', index = ':index')  => `/products/${id}/img/${index}`;
