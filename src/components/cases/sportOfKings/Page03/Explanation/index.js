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
        Reduces profits by $465,000
      </Header>
      <BodyText>
        If the horses in the original stable had a CPI of 2 and earned $20,000 a race on average, then the average 3-year-old male thoroughbred must earn $10,000 per race:
      </BodyText>
      <MathText>
        $20,000 / 2 = $10,000
      </MathText>
      <BodyText>
        If the horses in the expansion have a CPI of 1.69, their average earnings per race will equal:
      </BodyText>
      <MathText>
        $10,000 × 1.69 = $16,900
      </MathText>
      <BodyText>
        With six races per year, annual race earnings per horse come out to:
      </BodyText>
      <MathText>
        $16,900 × 6 = $101,400
      </MathText>
      <BodyText>
        And since this still amounts to only 40% of a horse’s total earnings, we calculate those as:
      </BodyText>
      <MathText>
        $16,900 / 40% = $253,500 total
      </MathText>
      <BodyText>
        Previously we had forecast each horse to bring in $300,000 a year. This updated estimate represents a $46,500 decline in forecasted revenue for each horse:
      </BodyText>
      <MathText>
        $300,000 - $253,500 = $46,500
      </MathText>
      <BodyText>
        Since we have 10 horses, the total annual revenue estimate falls by:
      </BodyText>
      <MathText>
        $46,500 × 10 = $465,000
      </MathText>
      <BodyText>
        With costs unchanged, this drop in revenue translates directly into a drop in profit, and represents our answer.
      </BodyText>
    </View>
  );
};

export default Explanation;
