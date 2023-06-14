import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import createStyles from './styles';
import useTheme from '../../hooks/useTheme';

const Splash: React.FC = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.navigate('Tabs'));
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clark</Text>
    </View>
  );
};

export default Splash;
