import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

import createStyles from './styles';
import {Rating, Button, Icon} from '../../components';
import useTheme from '../../hooks/useTheme';
import {TProduct} from '../../utils/types';

const ProductDetails = () => {
  const {
    params: {item},
  } = useRoute();
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const [favourite, setFavourite] = useState(false);

  const product: TProduct = item;

  const handleFavourites = () => {
    setFavourite(!favourite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: product.image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <TouchableOpacity onPress={handleFavourites}>
            {favourite ? (
              <Icon
                name="heart"
                type="AntDesign"
                size={20}
                color={colors.danger}
              />
            ) : (
              <Icon
                name="hearto"
                type="AntDesign"
                size={20}
                color={colors.black}
              />
            )}
          </TouchableOpacity>
        </View>
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
