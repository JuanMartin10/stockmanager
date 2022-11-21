import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Chip, Text } from 'react-native-paper';

const ProductDetails = ({ name, quantity, labels, cover }) => {
  const stock = quantity === 0 ? 'Out of stock' : quantity;
  return (
    <Card>
      <Card.Cover source={cover} />
      <Card.Content>
        <Title>{name}</Title>
        <View style={styles.labelRow}>
          {labels.map(label => (
            <Chip icon="check" style={styles.label} key={`id-${label}`}>
              {label}
            </Chip>
          ))}
        </View>
        <Text style={styles.title} variant="titleLarge">
          Stock: {stock}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  detailsCard: {
    padding: 8,
  },
  stockTitle: {
    padding: 8,
  },
  labelRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    marginTop: 20,
  },
  label: {
    marginRight: 4,
  },
});

ProductDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  cover: PropTypes.number,
  label: PropTypes.string,
};
