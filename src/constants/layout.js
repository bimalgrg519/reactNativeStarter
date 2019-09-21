import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

const BASE_WIDTH = 360;
const BASE_HEIGHT = 620;

const scaleFactorWidth = width / BASE_WIDTH;
const scaleFactorHeight = height / BASE_HEIGHT;

// font size scale taken based on screen width
export const fontScale = fontSize => scaleFactorWidth * fontSize;

export const paddingLeft = 25;
