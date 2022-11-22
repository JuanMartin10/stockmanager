import React, { useState } from 'react';
import { createContext, useContext, useReducer } from 'react';
import {
  filterBlogs,
  initialState,
  updateQuantityProduct,
} from './state/store.actions';
import { INITIAL_STATE, storesReducer } from './state/store.reducer';

const StoresContext = createContext(null);
const StoresDispatchContext = createContext(null);

export const StoresProvider = ({ children }) => {
  const [stores, dispatch] = useReducer(storesReducer, INITIAL_STATE);
  const [searchBarText, setSearchBarText] = useState('');

  const handleSearchStore = query => {
    const queryLowercase = query.toLowerCase();
    setSearchBarText(query);
    if (queryLowercase === '') {
      return dispatch(initialState());
    }
    if (queryLowercase.length > 0) {
      filterBlogs(queryLowercase);
      dispatch(filterBlogs(queryLowercase));
    }
  };

  const handleQuantity = obj => dispatch(updateQuantityProduct(obj));

  const value = {
    stores,
    searchBarText,
    handleSearchStore,
    handleQuantity,
  };

  return (
    <StoresContext.Provider value={value}>
      <StoresDispatchContext.Provider value={dispatch}>
        {children}
      </StoresDispatchContext.Provider>
    </StoresContext.Provider>
  );
};

export const useStores = () => useContext(StoresContext);
export const useStoresDispatch = () => useContext(StoresDispatchContext);
