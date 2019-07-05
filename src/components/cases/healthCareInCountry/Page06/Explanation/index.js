/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import Fraction from '../../../../Fraction';
import MathText from '../../../../MathText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        The measure now generates surplus
      </Header>
      <BodyText>
        The additional revenue brings total savings to 1.5 billion baht, slightly above the total expenditure.
      </BodyText>
      <BodyText>
        First calculate the income gains to rural Thai families. They receive <Fraction>5/8</Fraction> of the additional 4.8 billion baht in national income. That’s equal to 3 billion baht.
      </BodyText>
      <MathText>
        <Fraction>5/8</Fraction> × 4.8 billion = 3 billion
      </MathText>
      <BodyText>
        At a 5% tax rate, that leads to additional annual revenue from rural Thai families of 150 million:
      </BodyText>
      <MathText>
        3 billion × 5% = 150 million baht
      </MathText>
      <BodyText>
        So over the full five year period additional tax revenue from rural Thai families equals 750 million baht:
      </BodyText>
      <MathText>
        5 × 150 million = 750 million
      </MathText>
      <BodyText>
        Now add in the additional 750 million in tax revenue from urban families to get the total increase in tax revenue:
      </BodyText>
      <MathText>
        750m + 750m = 1.5 billion
      </MathText>
      <BodyText>
        Given that the cost of the measure over the five year period is 1.47 billion baht, this represents a small surplus.
      </BodyText>
    </View>
  );
};

export default Explanation;
