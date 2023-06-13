import {useColorScheme} from 'react-native';
import {TPalette} from '../utils/types';

const darkTheme: TPalette = {
  brandTint: '#0439d7',

  black: '#000',
  white: '#FFF',
  danger: '#DC362E',
};

const lightTheme: TPalette = {
  brandTint: '#0439d7',

  black: '#000',
  white: '#FFF',
  danger: '#DC362E',
};

const useTheme = (): {colors: TPalette} => {
  const theme = useColorScheme();

  return {
    colors: theme === 'dark' ? darkTheme : lightTheme,
  };
};

export default useTheme;
