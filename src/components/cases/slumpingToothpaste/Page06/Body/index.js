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
        Continuing to assume that your priority is maximizing revenue, what price should Crestgate set for its toothpaste in Dizcount Mart&apos;s stores?
      </BodyText>
      <BlockQuote>
        After you determine your answer, reflect on some potential downsides to setting prices at this level.
      </BlockQuote>
    </View>
  );
};

export default Body;
