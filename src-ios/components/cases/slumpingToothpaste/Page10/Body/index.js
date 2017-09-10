/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import I from '../../../../ItalicText';
import Fraction from '../../../../Fraction';
import PercentageSubsequent from '../../../../block-quotes/PercentageSubsequent';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Crestgate decides that it will set the price for the <I>e-Brush</I> at $40 for the coming year.
      </BodyText>
      <BodyText>
        Assuming that overall volume of sales in the electric toothbrush market remains unchanged, what will be Crestgate&apos;s market share by volume?
      </BodyText>
      <BlockQuote>
        Assume that the demand curve estimated by your team remains accurate in the next year. Together Crestgate, Dental-B, and Brawn accounted for <Fraction>8/11</Fraction> of the market this year.
      </BlockQuote>
      <PercentageSubsequent />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
