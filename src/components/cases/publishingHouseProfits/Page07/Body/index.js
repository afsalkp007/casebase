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
        In anticipation of soliciting offers, your team is asked to provide an estimate for a fair sale price.
      </BodyText>
      <BodyText>
        To start with, value the group using discounted cash flow analysis. Specifically, use the approach favored by many leading investors: calculating worth as the sum of expected net cash flow over the life of the business, discounted by prevailing interest rates.
      </BodyText>
      <BodyText>
        Use profit as a proxy for net cash flow. As a conservative estimate, assume that the group survives 10 more years, netting a  $225,000 profit next year with that value falling by $25,000 each subsequent year. Use an annual interest rate of 5% in your analysis.
      </BodyText>
      <BlockQuote>
        A rough answer will do.
      </BlockQuote>
    </View>
  );
};

export default Body;
