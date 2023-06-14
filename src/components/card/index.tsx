import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import createStyles from './styles';
import Rating from '../rating';
import {TProduct} from '../../utils/types';
import useTheme from '../../hooks/useTheme';

const Card = React.memo(
  ({item, onPress}: {item: TProduct; onPress: () => void}) => {
    const {colors} = useTheme();
    const styles = createStyles(colors);

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        testID="card-component">
        <View style={styles.imageContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.price}>{`$ ${item.price}`}</Text>
          <Rating rate={item.rating.rate} count={item.rating.count} />
        </View>
      </TouchableOpacity>
    );
  },
);

export default Card;
