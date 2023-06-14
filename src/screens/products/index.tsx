import React, {useState} from 'react';
import {View, FlatList, Text, RefreshControl} from 'react-native';

import {Card, Input} from '../../components';
import useProducts from '../../api/useProducts';
import createStyles from './styles';
import {TProduct} from '../../utils/types';
import useDebounce from '../../hooks/useDebounce';
import {CommonActions, useNavigation} from '@react-navigation/native';

const Products: React.FC = () => {
  const navigation = useNavigation();
  const styles = createStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: products,
    loading,
    retry,
  } = useProducts({
    searchTerm: debouncedSearchTerm,
  });

  const onProductTap = (item: TProduct) => {
    navigation.dispatch(
      CommonActions.navigate('ProductDetails', {
        item,
      }),
    );
  };

  const handleRefresh = () => {
    retry();
  };

  const _renderProductTile = ({item}: {item: TProduct}) => {
    return <Card item={item} onPress={() => onProductTap(item)} />;
  };

  const _renderListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Products Found</Text>
      </View>
    );
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <Input
        value={searchTerm}
        onChangeText={handleSearch}
        placeholder="Search Product..."
      />
      <FlatList
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        key={'Products'}
        data={products}
        renderItem={_renderProductTile}
        keyExtractor={item => `product_${item.id}`}
        ListEmptyComponent={_renderListEmptyComponent()}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default Products;
