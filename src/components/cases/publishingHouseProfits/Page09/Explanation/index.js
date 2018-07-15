/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Header from '../../../../Header';


const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Fair market price of $1.23 million
      </Header>
      <BodyText>
        The profit multiples from the past decade have a 4.9 average. The profit this year was $250,000. So the valuation given by profit multiples equals:
      </BodyText>
      <MathText>
        4.9 × $250k = $1,225,000
      </MathText>
    </View>
  );
};

export default Explanation;
