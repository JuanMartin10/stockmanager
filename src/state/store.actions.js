export const actions = {
  ADD: 'add',
  FILTER_SEARCH: 'filterSearch',
  UPDATE: 'update',
  DELETE: 'delete',
  INITIAL: 'initial',
  PRODUCT_QUANTITY: 'productQuantity',
};

export const filterBlogs = text => {
  return {
    type: actions.FILTER_SEARCH,
    payload: text,
  };
};

export const initialState = () => {
  return {
    type: actions.INITIAL,
  };
};

export const updateQuantityProduct = obj => {
  return {
    type: actions.PRODUCT_QUANTITY,
    payload: obj,
  };
};
