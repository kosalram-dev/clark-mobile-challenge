import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    container: {
      marginVertical: 5,
    },
    star: {
      flexDirection: 'row',
    },
    reviewCount: {
      fontSize: 10,
      fontWeight: '700',
    },
  });

export default createStyles;
