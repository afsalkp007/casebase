/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
import FreeResponseInitial from '../../../../block-quotes/FreeResponseInitial';
// 1080 x 960
import tableOneSrc from '../assets/tableOne/index.png';
// 1080 x 960
import tableTwoSrc from '../assets/tableTwo/index.png';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team compiles the graphic below detailing the trajectory of Crestgate sales at supermarkets and discount stores in recent years.
      </BodyText>
      <ImageFrame
        source={tableOneSrc}
        aspectRatio={1080 / 960}
      />
      <ImageFrame
        source={tableTwoSrc}
        aspectRatio={1080 / 960}
      />
      <BodyText>
        Looking at these charts, what possible explanations do you see for Crestgate’s stagnating sales?
      </BodyText>
      <FreeResponseInitial />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
