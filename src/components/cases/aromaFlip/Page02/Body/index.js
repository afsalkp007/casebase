/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
// 582×719
import imgSrc from '../assets/figureOne/index.png';
import ImageFrame from '../../../../ImageFrame';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The fragrance market - also referred to as the scents market - can be subdivided into a handful of differentiated segments. Your team thinks that Arabel’s focus is spread too thin at the moment. They’d like to identify one or two market segments to target.
      </BodyText>
      <BodyText>
        The graph below details the overall market:
      </BodyText>
      <ImageFrame
        source={imgSrc}
        aspectRatio={582 / 719}
      />
      <BodyText>
        Are there any market segments that look particularly attractive?
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
