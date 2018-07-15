/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';

const Body = function Body() {
  return (
    <View>

      <BodyText>
        In the last five years, two comparable content production groups at traditional publishers were sold off at profit multiples of 4.5 and 4.4. In the five years prior to that, three operations were sold at profit multiples of 5.2, 5.1, and 5.3.
      </BodyText>
      <BodyText>
        Using an average of the profit multiples over the past decade, what is your estimate of a fair market price for Marlin’s content production group, given it earned profits of $250,000 in the most recent year?
      </BodyText>
      <BlockQuote>
        Valuation calculations using profit multiples are very straightforward. Simply multiply profit by observed multiples in recent sales within the peer group. In this instance, you are instructed to calculate that multiple using a simple average.
      </BlockQuote>
    </View>
  );
};

export default Body;
