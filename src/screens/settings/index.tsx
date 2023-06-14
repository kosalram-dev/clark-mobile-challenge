import React from 'react';
import {View, Text} from 'react-native';

import createStyles from './styles';
import useTheme from '../../hooks/useTheme';

const Settings: React.FC = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clark</Text>
      <Text>Settings Page</Text>
    </View>
  );
};

export default Settings;
