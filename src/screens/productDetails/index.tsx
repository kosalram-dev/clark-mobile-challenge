import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import createStyles from './styles';
import {RootStackParamList} from '../../utils/types';
import {Rating, Button, Icon} from '../../components';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

type ProductDetailsProps = {
  route: ProductDetailsRouteProp;
  navigation: ProductDetailsNavigationProp;
};

const product = {
  id: 6,
  title: 'Solid Gold Petite Micropave ',
  price: 168,
  description:
    'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  rating: {
    rate: 4.9,
    count: 70,
  },
};

const ProductDetails: React.FC<ProductDetailsProps> = (
  props: ProductDetailsProps,
) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: product.image}}
        style={styles.imageContainer}
        resizeMode="contain">
        <View style={styles.favourite}>
          <Icon name="hearto" type="AntDesign" size={20} color="black" />
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Rating rate={product.rating.rate} count={product.rating.count} />

        <View style={styles.content}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>{`$ ${product.price}`}</Text>
          </View>
          <Button
            title="Add Product"
            onPress={() => {}}
            icon={{
              name: 'cart-plus',
              type: 'FontAwesome5',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
