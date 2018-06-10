/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
import FreeResponseSubsequent from '../../../../block-quotes/FreeResponseSubsequent';
// 1080w 600h
import tableOneSrc from '../assets/tableOne/index.png';
import tableTwoSrc from '../assets/tableTwo/index.png';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The head of Crestgate’s electric toothbrush division provides you the material below, detailing sales figures for electric toothbrushes and accessory heads. The numbers cover Crestgate’s sales for the latest year as well as those of its two biggest rivals: Dental-B and Brawn.
      </BodyText>
      <ImageFrame
        source={tableOneSrc}
        aspectRatio={1080 / 600}
      />
      <ImageFrame
        source={tableTwoSrc}
        aspectRatio={1080 / 600}
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
