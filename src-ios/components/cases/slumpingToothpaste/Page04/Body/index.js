/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import Fraction from '../../../../Fraction';
import PercentageSubsequent from '../../../../block-quotes/PercentageSubsequent';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team speaks with Crestgate&apos;s sales team and learns that the price declines have been coordinated with Dizcount Mart to prevent Crestgate products from losing significant market share to rivals. While Crestgate sales at Dizcount Mart have jumped sharply, sales have increased even more markedly for competitors: 140% in volume terms from 2011 to 2013.
      </BodyText>
      <BodyText>
        What was Crestgate&apos;s share of all Dizcount Mart toothpaste sales by volume in 2013?
      </BodyText>
      <BlockQuote>
        In 2011, Crestgate&apos;s share by volume at Dizcount Mart was <Fraction>2/5</Fraction>.
      </BlockQuote>
      <PercentageSubsequent />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
