/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import PercentageSubsequent from '../../../../block-quotes/PercentageSubsequent';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team would like to better understand how program funding is spent in Laraguay, and compare that with spending patterns in Similar C, one of the countries with comparable GDP per capita. In total, Similar C spends a little less than Laraguay, yet obtains better results.
      </BodyText>
      <BodyText>
        Data shows that in Similar C, 48% of program funding goes to caregiver salaries. In Laraguay, caregivers are paid, on average, $25,000.
      </BodyText>
      <BodyText>
        What percentage of program funding goes towards caregiver salaries in Laraguay?
      </BodyText>
      <PercentageSubsequent />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
