/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import PercentageInitial from '../../../../block-quotes/PercentageInitial';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The graph shows that this year, men’s hygiene made up 20% of all sales. If growth in that segment accelerates 15% for the coming year, it will compose roughly what share of the overall market?
      </BodyText>
      <BodyText>
        Report your answer in percentage points.
      </BodyText>
      <PercentageInitial />
      <BlockQuote color="green">
        Assume that the scents market as a whole grows by 3%.
      </BlockQuote>
    </View>
  );
};

export default Body;
