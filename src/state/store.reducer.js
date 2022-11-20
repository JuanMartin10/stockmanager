import { STORES } from '../mocks/stores.mock';
import { actions } from './store.actions';

export const INITIAL_STATE = STORES;

export const storesReducer = (stores, action) => {
  switch (action.type) {
    case actions.ADD:
      return [
        ...stores,
        {
          id: action.id,
          name: action.name,
          address: action.address,
          phone: action.phone,
          website: action.website,
          products: [],
        },
      ];
    case actions.FILTER_SEARCH:
      return INITIAL_STATE.filter(store => {
        return store.name.toLowerCase().includes(action.payload);
      });
    case actions.UPDATE:
      return stores.map(store => {
        if (store.id === action.store.id) {
          return action.store;
        } else {
          return store;
        }
      });
    case actions.DELETE:
      return stores.filter(({ id }) => id !== action.id);
    case actions.INITIAL:
      return INITIAL_STATE;
    default:
      throw Error(`Unknown action ${action.type}`);
  }
};
