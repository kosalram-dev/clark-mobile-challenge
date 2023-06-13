import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from '../icon';

type TButtonProps = {
  title: string;
  onPress: () => void;
  icon?: {
    name: string;
    type: string;
  };
};

const Button = ({title, onPress, icon}: TButtonProps) => {
  const styles = createStyles();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {icon && (
        <Icon name={icon.name} type={icon.type} size={20} color="white" />
      )}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const createStyles = () =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: 'tomato',
      padding: 8,
      borderRadius: 4,
    },
    buttonText: {
      fontWeight: '600',
      color: 'white',
      marginHorizontal: 8,
    },
  });
