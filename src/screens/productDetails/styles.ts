import {StyleSheet, Dimensions} from 'react-native';
import {TPalette} from '../../utils/types';

const {width} = Dimensions.get('screen');

const createStyles = (colors: TPalette) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: colors.white,
    },

    imageContainer: {
      flex: 1,
      display: 'flex',
      backgroundColor: colors.white,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: width / 1.5,
      resizeMode: 'contain',
    },
    detailsContainer: {
      padding: 12,
      display: 'flex',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: colors.white,
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    title: {
      fontWeight: '900',
      fontSize: 18,
    },
    content: {
      marginVertical: 12,
    },
    label: {
      fontSize: 16,
    },
    description: {
      marginVertical: 8,
      fontSize: 14,
      color: 'grey',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceLabel: {
      fontSize: 14,
      color: 'grey',
    },
    price: {
      fontWeight: '900',
      fontSize: 18,
      paddingHorizontal: 12,
    },
    favourite: {
      position: 'absolute',
      right: 10,
      top: 5,
    },
    titleContainer: {
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default createStyles;
