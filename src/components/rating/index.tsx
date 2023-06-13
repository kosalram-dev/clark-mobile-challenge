import React from 'react';
import {View, Text} from 'react-native';

import createStyles from './styles';
import Icon from '../icon';
import {TRating} from '../../utils/types';

const Rating = React.memo(({rate, count}: TRating) => {
  const styles = createStyles();

  const filledStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  return (
    <View style={styles.container}>
      <View style={styles.star}>
        {[...Array(filledStars)].map((_, index) => (
          <Icon key={`star_${index}`} name="star" type="AntDesign" size={16} />
        ))}
        {hasHalfStar && <Icon name="staro" type="AntDesign" size={16} />}
      </View>
      <Text style={styles.reviewCount}>{`(${count} Reviews)`}</Text>
    </View>
  );
});

export default Rating;
