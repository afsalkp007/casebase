/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import FreeResponseInitial from '../../../../block-quotes/FreeResponseInitial';
// 583×594
import imgSrc from '../assets/figureOne/publishing_1.png';
import img2Src from '../assets/figureTwo/publishing__3.png';
import ImageFrame from '../../../../ImageFrame';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The internal strategy team at Marlin provides you with the graphs below. The first details total annual revenue for the Editorial Services starting in 2011. The second shows gross profits over the same period.
      </BodyText>
      <ImageFrame
        source={imgSrc}
        aspectRatio={583 / 594}
      />
      <ImageFrame
        source={img2Src}
        aspectRatio={583 / 594}
      />
      <BodyText>
        What can you infer from the graphs above?
      </BodyText>
      <FreeResponseInitial />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
