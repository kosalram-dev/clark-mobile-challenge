import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      padding: 10,
    },

    emptyContainer: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default createStyles;
