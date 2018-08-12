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
        The owners tell you that this would be a hefty profit for the addition, but they worry the estimate is a tad sanguine.
      </BodyText>
      <BodyText>
        The owners note that the $20,000 in earnings per race estimate comes from an assumption that the horses bred in the expansion exhibit a ‘Class Performance Index’, or CPI, equal to the horses in Talumet’s original stable.
      </BodyText>
      <BodyText>
        CPI is the ratio of a horse’s average earnings per start over the average earnings per start of racehorses of the same breed, sex, and age.
      </BodyText>
      <BodyText>
        Assume for simplicity that Talumet races only three-year-old male thoroughbreds. The trainers peg the CPI of horses in Talumet’s original stable at 2. They expect the horses in the expansion will be a bit weaker, considering it can take decades to breed and acquire a solid roster of racehorses. They estimate an average CPI of 1.69 for the expansion horses.
      </BodyText>
      <BodyText>
        How much does this shave off your profit estimate? Do not precede your answer with a negative sign, as the direction of the move is already understood.
      </BodyText>
      <BlockQuote
        color="blue"
      >
        Assume that the ratio of race earnings to total earnings remains the same. Assume that the cost estimate remains unchanged.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
