import {StyleSheet} from 'react-native';
import {TPalette} from '../../utils/types';

const createStyles = (colors: TPalette) =>
  StyleSheet.create({
    input: {
      height: 48,
      backgroundColor: colors.white,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      shadowColor: colors.black,
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 2,
      elevation: 2,
    },
  });

export default createStyles;
