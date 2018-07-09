/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Header from '../../../../Header';
import Fraction from '../../../../Fraction';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        The lead competitor has a 1.5 RMS
      </Header>
      <BodyText>
        If the second largest company has a market share <Fraction>1/3</Fraction> larger than Arabel’s 15%, then its share is 20%:
      </BodyText>
      <MathText>
        15% share × 1<Fraction>1/3</Fraction> =  20%
      </MathText>
      <BodyText>
        And as we already know the leading competitor’s absolute share from the graph on page six, we can now calculate its RMS as:
      </BodyText>
      <MathText>
        30% / 20% = 1.5 RMS
      </MathText>
    </View>
  );
};

export default Explanation;
