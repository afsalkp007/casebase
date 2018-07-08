/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import I from '../../../../ItalicText';
// 616x978
import imgSrc from '../assets/tableOne/aroma-flip-2.png';
import ImageFrame from '../../../../ImageFrame';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team decides that <I>Arabel</I> should focus on one of the following markets:
      </BodyText>
      <BodyText>
          1. Air Fresheners
          {'\n'}
          2. Women’s Hygiene
          {'\n'}
          3. Men’s Hygiene
      </BodyText>
      <BodyText>
        Sifting through records of past deal activity, your team compiles information on recent sales of major companies in each of these markets.
      </BodyText>
      <BodyText>
        Referencing the chart below, which market segment has the highest profit multiples?
      </BodyText>
      <ImageFrame
        source={imgSrc}
        aspectRatio={616 / 978}
      />
    </View>
  );
};

export default Body;

