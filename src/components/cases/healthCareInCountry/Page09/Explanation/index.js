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
        24.4 million rural Thai
      </Header>
      <BodyText>
        The tricky part of this problem is that it requires us to pull information from several parts of the case (yes, sometimes interviewers are this devious).
      </BodyText>
      <BodyText>
        We know from the first question that Thailand’s rural population is 44 million. We know from the survey that about 50% will use the locations for all primary care services. So, before the ad campaign was run, the number of rural Thai forecast to use the locations for all primary services equaled 22 million:
      </BodyText>
      <MathText>
        44 million × 50% = 22 million
      </MathText>
      <BodyText>
        Adding the 2.4 million estimated to have been swayed by the ad campaign leaves us with 24.4 million rural Thai forecasted to use the locations for all primary services:
      </BodyText>
      <MathText>
        22 million + 2.4 million = 24.4 million
      </MathText>
    </View>
  );
};

export default Explanation;
