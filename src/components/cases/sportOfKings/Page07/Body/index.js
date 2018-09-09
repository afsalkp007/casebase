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
        In this day, horses generate non-negligible promotional revenues only when they win one of the Triple Crown races: the Derby, the Preakness, or the Belmont.
      </BodyText>
      <BodyText>
        The trainers at Talumet farm have an old rule of thumb governing the likelihood of such a victory. They call it the ‘Rule of 10s’: in any given year, there is only a 10% chance the farm will produce the type of standout horse that would race in the Triple Crown races. That standout horse, in a given Triple Crown race, only enjoys a 10% chance of victory.
      </BodyText>
      <BodyText>
        Using that rule of thumb, what’s the likelihood that Talumet farm earns non-negligible promotional revenues in a given year? Report your answer in percentage points, rounding to the nearest tenth.
      </BodyText>
      <BlockQuote
        color="blue"
      >
        Assume that the rule of thumb is not changed by the potential expansion, and that if Talumet produces a standout horse, it enters it in all three Triple Crown races. If the farm fails to produce such a horse, it enters none.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
