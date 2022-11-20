export const actions = {
  ADD: 'add',
  FILTER_SEARCH: 'filterSearch',
  UPDATE: 'update',
  DELETE: 'delete',
  INITIAL: 'initial',
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
