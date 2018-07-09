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
        It will take three years
      </Header>
      <BodyText>
        In the first year, Arabel’s profit margins will equal:
      </BodyText>
      <MathText>
        1% + (15-1%)/3 = 5.66%
      </MathText>
      <BodyText>
        In the second year:
      </BodyText>
      <MathText>
        5.66% + (15-5.66%)/3 = 8.77%
      </MathText>
      <BodyText>
        In the third year:
      </BodyText>
      <MathText>
        8.77% + (15-8.77%)/3 ≈  10.85%
      </MathText>
      <BodyText>
        It will take three years.
      </BodyText>
    </View>
  );
};

export default Explanation;
