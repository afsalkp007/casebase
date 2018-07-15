/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Fraction from '../../../../Fraction';
import PercentageSubsequent from '../../../../block-quotes/PercentageSubsequent';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The proofreading and content production markets are fairly mature, and Marlin has a good sense of the company’s market share in those areas (12% and 8%, respectively).
      </BodyText>
      <BodyText>
        The full services market is less mature, and somewhat less defined. Marlin asks your team to provide an estimate for the company’s market share in that area.
      </BodyText>
      <BodyText>
        Your team surveys 50 companies in the UK and the US (considered as a single market in this study). About an eighth of the companies reported staffing a full services group. On average, these groups generated around $1.5 million in revenue.
      </BodyText>
      <BodyText>
        Your team estimates that their survey covered around <Fraction>1/10</Fraction> of the other major publishing houses. Assuming the composition of the broad industry mirrors the composition of your team’s survey, what is Marlin’s market share in the full services business?
      </BodyText>
      <PercentageSubsequent />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
