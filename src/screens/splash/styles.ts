import {StyleSheet} from 'react-native';
import {TPalette} from '../../utils/types';

const createStyles = (colors: TPalette) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.brandTint,
    },
  });

export default createStyles;
