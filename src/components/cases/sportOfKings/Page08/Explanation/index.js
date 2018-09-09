/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Expected revenue of $100
      </Header>
      <BodyText>
        To start with, there is a tenth of percentage point chance that a horse will win the full Triple Crown, so expected revenue from this outcome is:
      </BodyText>
      <MathText>
        0.1% × $1m = $1,000
      </MathText>
      <BodyText>
        Now, these probabilities only apply if Talumet farm produces a standout horse. Since there’s just a 10% chance of that occurring, the actual expected revenue is:
      </BodyText>
      <MathText>
        10% × $1,000 = $100
      </MathText>
    </View>
  );
};

export default Explanation;
