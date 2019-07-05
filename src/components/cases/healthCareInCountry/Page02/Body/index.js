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
        Expanding service locations may help lower costs by reducing the amount Thai families must pay for transportation to access health care.
      </BodyText>
      <BodyText>
        The team has estimated that essentially all of Thailand’s rural families rely on the public care system. On average, those families earn a yearly income of 610,000 baht and spend 100 baht per month on transportation costs to access health care.
      </BodyText>
      <BodyText>
        In aggregate, how much do rural Thai families spend per year to access health care?
      </BodyText>
      <BlockQuote color="green">
        Assume that Thai families are made up of four people on average and that the country has a rural population of 44 million. Provide your answer in Thai baht.
      </BlockQuote>
      <BlockQuote color="yellow">
        Give an exact answer. For example, 11.2 billion should be entered as 11200000000.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
