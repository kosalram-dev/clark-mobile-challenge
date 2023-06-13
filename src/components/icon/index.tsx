import React from 'react';

import {View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

import {TIcon} from '../../utils/types';

const Icon = ({name, size = 30, color = '#FFEE1A', type, style}: TIcon) => {
  const getIconsByType = () => {
    switch (type) {
      case 'AntDesign':
        return (
          <AntDesign style={style} name={name} size={size} color={color} />
        );
      case 'FontAwesome':
        return (
          <FontAwesome style={style} name={name} size={size} color={color} />
        );
      case 'Ionicons':
        return <Ionicons style={style} name={name} size={size} color={color} />;
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            style={style}
            name={name}
            size={size}
            color={color}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons style={style} name={name} size={size} color={color} />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5 style={style} name={name} size={size} color={color} />
        );
      case 'SimpleLineIcon':
        return (
          <SimpleLineIcon style={style} name={name} size={size} color={color} />
        );
      case 'Entypo':
        return <Entypo style={style} name={name} size={size} color={color} />;
      case 'Feather':
        return <Feather style={style} name={name} size={size} color={color} />;
      case 'Octicons':
        return <Octicons style={style} name={name} size={size} color={color} />;
      default:
        return <></>;
    }
  };
  return <View>{getIconsByType()}</View>;
};

export default Icon;
