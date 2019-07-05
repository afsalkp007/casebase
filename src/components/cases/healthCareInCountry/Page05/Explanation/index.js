/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';
import Italic from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        No, it is not budget neutral
      </Header>
      <BodyText>
        A rough calculation suffices here. Reduced emergency room visits account for 60% of savings, so other savings and lower prescription drug costs must account for 40%. If lower prescription drug costs account for 80% of <Italic>these</Italic> savings, then it accounts for 32% of overall savings:
      </BodyText>
      <MathText>
        80% × 40% = 32%
      </MathText>
      <BodyText>
        This is just under a third of the full savings and 40 million baht in absolute terms. Therefore total annual savings will be roughly 120 million:
      </BodyText>
      <MathText>
        40 million × 3 = 120 million.
      </MathText>
      <BodyText>
        Over the five year period then, savings will amount to:
      </BodyText>
      <MathText>
        120 million × 5 = 600 million
      </MathText>
      <BodyText>
        That’s nowhere near the five year financial outlay. So, even without making an exact calculation, we can respond confidently that this does not meet the budget neutral standard.
      </BodyText>
      <BodyText>
        For reference, the precise solution is 625 million baht. Still, going for the rough estimate may be the preferable approach, since it shows a certain comfort manipulating percentages.
      </BodyText>
      <BodyText>
        As a general note, this is a common style of question in case interviews. The original prompt does not provide sufficient information to reach an answer. The accompanying graphic provides the additional information, but requires some extrapolation.
      </BodyText>
    </View>
  );
};

export default Explanation;
