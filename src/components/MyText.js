import React from 'react';
import {Text} from 'react-native';
import {fontScale} from '../constants/layout';

const fonts = {
  bold: 'NunitoSans-Bold',
  light: 'NunitoSans-Light',
  semiBold: 'NunitoSans-SemiBold',
};

const getFontSize = style => {
  if (!style) {
    return null;
  }
  return style.fontSize ? fontScale(style.fontSize) : fontScale(14);
};

const MyText = ({text, fontType, style, ...otherPorps}) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: getFontSize(style),
          fontFamily: fontType ? fonts[fontType] : 'NunitoSans-Regular',
        },
      ]}
      {...otherPorps}>
      {text}
    </Text>
  );
};

export default MyText;
