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
        Profit will fall by around $54,000
      </Header>
      <BodyText>
        We are not given exact numbers for this problem, but since only a rough answer is needed, we can eyeball the values from the graph.
      </BodyText>
      <BodyText>
        We know from the previous problem that each flat horse generated an annual profit around $14,000. Now we simply need to calculate the profit for a jump horse. We’ll start by calculating annual race earnings.
      </BodyText>
      <BodyText>
        It looks like the industry average purse is $2,000. With the forecast CPI for Talumet jump horses around 3.5, a Talumet jump racer’s average purse should equal:
      </BodyText>
      <MathText>
        $2,000 × 3.5 = $7,000
      </MathText>
      <BodyText>
        With an average of six races per year, annual purse earnings come out to $42,000:
      </BodyText>
      <MathText>
        $7,000 × 6 = $42,000
      </MathText>
      <BodyText>
        Since purses make up 40% of total revenues, annual revenues in full will equal:
      </BodyText>
      <MathText>
        $42,000 / 40% = $105,000
      </MathText>
      <BodyText>
        Now we need to calculate the cost side. Monthly upkeep appears around $12,000, which would make annual upkeep:
      </BodyText>
      <MathText>
        $12,000 × 12 = $144,000
      </MathText>
      <BodyText>
        That means annual profits from a jump racer would actually come out to around a $40,000 loss:
      </BodyText>
      <MathText>
        $105,000 - $144,000 ≈ -$40,000
      </MathText>
      <BodyText>
        Given that we’re losing the roughly $14,000 in profit a flat racer would have provided, the net loss in profit is even larger:
      </BodyText>
      <MathText>
        -$40,000 - $14,000 = -$54,000
      </MathText>
      <BodyText>
        As a rough answer was requested, any answer that recognized a net negative change in profits would have been accepted.
      </BodyText>
    </View>
  );
};

export default Explanation;
