/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
import FreeResponseInitial from '../../../../block-quotes/FreeResponseInitial';
import imgOneSrc from '../../../../../assets/images/case-graphics/slumpingToothpaste/page-2/one.png';
import imgTwoSrc from '../../../../../assets/images/case-graphics/slumpingToothpaste/page-2/two.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team compiles the graphic below detailing the trajectory of Crestgate sales at supermarkets and discount stores in recent years.
      </BodyText>
      <ImageFrame
        source={imgOneSrc}
        style={{
          height: 7 * (win.width / 9),
          flex: 1,
        }}
      />
      <ImageFrame
        source={imgTwoSrc}
        style={{
          height: 7 * (win.width / 9),
          flex: 1,
        }}
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
