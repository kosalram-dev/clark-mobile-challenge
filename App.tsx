import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigators/rootNavigator';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.flex1}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
    },
    flex1: {
      flex: 1,
    },
  });

export default App;
