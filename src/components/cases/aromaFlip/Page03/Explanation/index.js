/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Header from '../../../../Header';
import I from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Men’s hygiene will hold 21% of the market
      </Header>
      <BodyText>
        The first step is to calculate the rate of growth for men’s hygiene next year. Acceleration can be a tricky concept, since it is a second order derivative: the change in a change.
      </BodyText>
      <BodyText>
        Still, as presented here it is not complex. We have the current year’s rate of change (7%) and we have the rate it accelerates by (15%) so calculating next year’s growth rate is easy enough:
      </BodyText>
      <MathText>
        7% × 1.15 ≈ 8%
      </MathText>
      <BodyText>
        Now, when calculating changes in shares you have to take into account both the rate of growth and the current share of total. So, for the current problem, you have a segment with 20% of the share, that grows 8% to:
      </BodyText>
      <MathText>
        20% + (.08(20%)) = 21.6%
      </MathText>
      <BodyText>
        Remember however that market share equals segment size <I>divided by</I> market size.
      </BodyText>
      <BodyText>
        So the above share of 21.6% would be accurate only if the overall market size didn’t change. We know that it grows by 3%, so the change in the denominator must be incorporated.
      </BodyText>
      <BodyText>
        Doing this with 100% accuracy is somewhat complicated, and certainly more than you’d want to do in a case when a simple rough answer has been asked for.
      </BodyText>
      <BodyText>
        Fortunately, a back of the envelope method exists. To calculate the change in share for a segment caused by a change in the total market size, simply multiply the share of the segment by the change in total size.
      </BodyText>
      <BodyText>
        Here the calculation would be:
      </BodyText>
      <MathText>
        20% × .03 = 0.6%
      </MathText>
      <BodyText>
        Now we subtract this share from the value we calculated earlier (21.6%). Why? Because holding the absolute size of a given segment constant, growth in the overall market reduces the market share held by that segment.
      </BodyText>
      <BodyText>
        Our final answer therefore becomes:
      </BodyText>
      <MathText>
        21.6% - 0.6% = 21%
      </MathText>
      <BodyText>
        In several parts of this solution we rounded or used imprecise measures, but the clean answer we arrive at is actually <I>only two basis points</I>  – hundredths of a percentage point – away from the actual answer.
      </BodyText>
    </View>
  );
};

export default Explanation;
