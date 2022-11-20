import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const AppSearchBar = ({ placeholder, searchText, setSearchText }) => {
  const onChangeSearch = query => {
    setSearchText(query);
  };
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchText}
    />
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({});

AppSearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
