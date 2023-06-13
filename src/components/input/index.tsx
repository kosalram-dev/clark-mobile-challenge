import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import createStyles from './styles';
import useTheme from '../../hooks/useTheme';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({value, onChangeText, placeholder}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default Input;
