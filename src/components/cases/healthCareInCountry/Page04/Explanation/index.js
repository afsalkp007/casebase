/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';
import Fraction from '../../../../Fraction';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        1.47 billion baht
      </Header>

      <BodyText>
        The cost in the first year is given as 350 million baht.
      </BodyText>
      <BodyText>
        The cost in each of the following years is 80% of that. Perhaps the easiest way of calculating this value is taking 10% of 350 million - equal to 35 million - and subtracting twice that from 350 million. That’s a yearly cost of 280 million baht.
      </BodyText>
      <MathText>
        350m - 2 × (35m) = 280 million
      </MathText>
      <BodyText>
        Note: you can also solve this problem by observing that 80% is equivalent to <Fraction>4/5</Fraction>. Since 350 is divisible by 5, it is easy enough to calculate that <Fraction>1/5</Fraction> = 70 million, so <Fraction>4/5</Fraction> = 350 million - 70 million = 280 million baht.
      </BodyText>
      <BodyText>
        We need to multiply this value by four, since the cost is incurred over that number of years:
      </BodyText>
      <MathText>
        280 million × 4 = 1.12 billion
      </MathText>
      <BodyText>
        Now adding in the first year costs of $350 million, gives total costs over the period of 1.47 billion baht:
      </BodyText>
      <MathText>
        1.12b + 0.35b = 1.47 billion
      </MathText>
      <BodyText>
        With the above, there is not much advantage to the fractional approach, but it would show the interviewer that you can quickly identify multiples of the basic fractions even with higher magnitude numbers.
      </BodyText>
    </View>
  );
};

export default Explanation;
