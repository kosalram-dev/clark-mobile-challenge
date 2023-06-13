import React from 'react';
import {Image, View, Text} from 'react-native';

import createStyles from './styles';
import Rating from '../rating';
import {TProduct} from '../../utils/types';

const Card = React.memo(({item}: {item: TProduct}) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.price}>{`$ ${item.price}`}</Text>
        <Rating rate={item.rating.rate} count={item.rating.count} />
      </View>
    </View>
  );
});

export default Card;
