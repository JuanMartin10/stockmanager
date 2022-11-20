import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStores } from '../../StoresContext';

import StoresList from '../components/StoresList';
import AppSearchBar from '../../components/AppSearchBar';

const HomeScreen = () => {
  const { stores, searchBarText, handleSearchStore } = useStores();
  const navigation = useNavigation();

  const handleStoreView = storeId => {
    navigation.navigate('Store', {
      selectedStore: stores.find(({ id }) => id === storeId),
    });
  };

  return (
    <View style={styles.container}>
      <AppSearchBar
        placeholder="Search store"
        searchText={searchBarText}
        setSearchText={handleSearchStore}
      />
      <StoresList stores={stores} onPressView={handleStoreView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

HomeScreen.propTypes = {};

export default HomeScreen;
