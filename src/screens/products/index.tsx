import React from 'react';
import {View, FlatList} from 'react-native';

import useProducts from '../../api/useProducts';
import createStyles from './styles';
import Card from '../../components/card';
import {TProduct} from '../../utils/types';

const Products: React.FC = () => {
  const {data: products} = useProducts();
  const styles = createStyles();

  const _renderProductTile = ({item}: {item: TProduct}) => {
    return <Card item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        key={'Products'}
        data={products}
        renderItem={_renderProductTile}
        keyExtractor={item => `product_${item.id}`}
      />
    </View>
  );
};

export default Products;
