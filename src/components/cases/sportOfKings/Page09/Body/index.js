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
        A team member calculates out expected promotional revenue from a horse winning a single Triple Crown race: $56,000.
      </BodyText>
      <BodyText>
        Given the information you’ve compiled, and using some additional calculations, what is the overall expected promotional revenue for a given year?
      </BodyText>
      <BlockQuote
        color="blue"
      >
        Again, assume that there is a 10% chance of producing a standout horse and that non-standout horses earn a negligible amount of promotional revenue.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
