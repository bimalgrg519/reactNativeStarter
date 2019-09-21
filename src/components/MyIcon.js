import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyIcon = ({name, ...otherProps}) => (
  <Icon
    name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...otherProps}
  />
);

export default MyIcon;
