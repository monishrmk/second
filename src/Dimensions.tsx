import {Dimensions, PixelRatio} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const wp = (widthPercent: any) => {
  const elemWidth = parseFloat(widthPercent);
  const pxRatio = (width * elemWidth) / 100;
  return PixelRatio.roundToNearestPixel(pxRatio);
};
const hp = (heightPercent: any) => {
  const elemHeight = parseFloat(heightPercent);
  const pxRatioHeight = (height * elemHeight) / 100;
  return PixelRatio.roundToNearestPixel(pxRatioHeight);
};
export {wp, hp, screenWidth, screenHeight};