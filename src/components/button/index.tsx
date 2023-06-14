import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Icon from '../icon';
import useTheme from '../../hooks/useTheme';
import createStyles from './styles';

type TButtonProps = {
  title: string;
  onPress: () => void;
  icon?: {
    name: string;
    type: string;
  };
};

const Button = ({title, onPress, icon}: TButtonProps) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}>
      {icon && (
        <Icon
          name={icon.name}
          type={icon.type}
          size={20}
          color="white"
          testID={`icon-component-${icon.name}`}
        />
      )}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
