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
        Roughly $1 million
      </Header>
      <BodyText>
        The first thing to do is to calculate net future cash flows sans the time discount. Since the content production business earns $225,000 this year, and that falls in a linear fashion to zero over ten years, the total profits will be equal to:
      </BodyText>
      <MathText>
        10 × ($225,000 + 0) / 2
      </MathText>
      <BodyText>
        This is a simple enough calculation and leaves us with $1.125 million.
      </BodyText>
      <BodyText>
        Now, this excludes the present value discount, but it won’t have a huge effect on our calculated value: the larger discounting will occur in the later years when profits are already low. A precise calculation would be impossible in a case setting. So focus on calculating the discount for the first year, and inferring a rough effect from that.
      </BodyText>
      <BodyText>
        Next year’s discounted profits will be:
      </BodyText>
      <MathText>
        $225,000  / 1.05^1
      </MathText>
      <BodyText>
        Dividing this out gives us around $214,000, which means we discount next year’s value by $11,000. As we move farther out, the time discount increases, but the actual profit decreases, meaning the effect on the absolute value we’d subtract from our initial estimate is unclear.
      </BodyText>
      <BodyText>
        We’ll assume that the two factors are a wash, and discount each year’s calculated value by $11,000. That means in total we subtract:
      </BodyText>
      <MathText>
        9 years × $11,000 ≈ $100,000.
      </MathText>
      <BodyText>
        So our calculated value is $1,000,000. The actual answer is about $950,000. We’re off, but by an acceptable amount. If you walked through the above process with your interviewer they’d be impressed.
      </BodyText>
    </View>
  );
};

export default Explanation;
