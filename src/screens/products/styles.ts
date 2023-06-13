import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      padding: 10,
    },

    productCard: {
      display: 'flex',
      width: '100%',
      height: 80,
      borderRadius: 12,
      alignSelf: 'center',
      backgroundColor: '#78CAD2',
      marginVertical: 5,
    },
  });

export default createStyles;
