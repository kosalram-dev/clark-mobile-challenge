import {StyleSheet} from 'react-native';
import {TPalette} from '../../utils/types';

const createStyles = (colors: TPalette) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: colors.brandTint,
      padding: 8,
      borderRadius: 4,
    },
    buttonText: {
      fontWeight: '600',
      color: colors.white,
      marginHorizontal: 8,
    },
  });

export default createStyles;
