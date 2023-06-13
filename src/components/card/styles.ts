import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      width: '100%',
      minHeight: 120,
      borderRadius: 8,
      alignSelf: 'center',
      backgroundColor: 'white',
      marginVertical: 5,
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      elevation: 2,
    },
    imageContainer: {
      width: 100,
      height: 100,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },

    content: {
      padding: 8,
    },
    title: {
      fontWeight: '700',
      width: 200,
      flexWrap: 'wrap',
      paddingBottom: 8,
    },
    price: {
      fontWeight: '500',
    },
  });

export default createStyles;
