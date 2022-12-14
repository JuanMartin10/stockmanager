import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ProductCard from './ProductCard';

const ProductsList = ({ products, onModifyQuantity }) => {
  const navigation = useNavigation();
  const handleNavigation = product =>
    navigation.navigate('Product', {
      product,
    });
  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="titleLarge">
        Stock
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="transparent"
            style={styles.item}
            key={item.name}
            onPress={() => handleNavigation(item)}>
            <ProductCard {...item} onModifyQuantity={onModifyQuantity} />
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    padding: 8,
  },
  title: {
    marginBottom: 12,
  },
  item: {
    marginBottom: 16,
  },
});

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  onModifyQuantity: PropTypes.func.isRequired,
};

export default ProductsList;
