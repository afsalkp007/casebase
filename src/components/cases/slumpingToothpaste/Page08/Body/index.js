/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
import FreeResponseSubsequent from '../../../../block-quotes/FreeResponseSubsequent';
// 1080w 600h
import imgOneSrc from '../../../../../assets/images/case-graphics/slumpingToothpaste/page-8/one.png';
import imgTwoSrc from '../../../../../assets/images/case-graphics/slumpingToothpaste/page-8/two.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The head of Crestgate’s electric toothbrush division provides you the material below, detailing sales figures for electric toothbrushes and accessory heads. The numbers cover Crestgate’s sales for the latest year as well as those of its two biggest rivals: Dental-B and Brawn.
      </BodyText>
      <ImageFrame
        source={imgOneSrc}
        style={{
          height: 4 * (win.width / 9),
          flex: 1,
        }}
      />
      <ImageFrame
        source={imgTwoSrc}
        style={{
          height: 4 * (win.width / 9),
          flex: 1,
        }}
      />
      <BodyText>
        Do these charts suggest any way for the electric toothbrush division to boost revenue?
      </BodyText>
      <FreeResponseSubsequent />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
