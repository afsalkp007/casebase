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
        Generates $600,000 in profits
      </Header>
      <BodyText>
        Profit is total revenue - total cost. We’re given annual costs ($2.4 million), so all that is left to do is calculate annual revenue.
      </BodyText>
      <BodyText>
        Start by calculating the average race winnings per year for a horse at Talumet. With six races a year and $20,000 in purse money per race, total annual winnings for a horse average $120,000:
      </BodyText>
      <MathText>
        $20,000 × 6 = $120,000
      </MathText>
      <BodyText>
        However, this amounts to only 40% of a horse’s total earnings per year, which therefore equals:
      </BodyText>
      <MathText>
        $120,000 / 40% = $300,000
      </MathText>
      <BodyText>
        That value is for one horse. If the new stables will house 10 additional horses, their combined annual earnings will be $3 million:
      </BodyText>
      <MathText>
        $300,000 × 10 = $3 million
      </MathText>
      <BodyText>
        Now to calculate profit we just subtract the $2.4 million in annual costs:
      </BodyText>
      <MathText>
        $3 million - $2.4 million = $600,000
      </MathText>
    </View>
  );
};

export default Explanation;
