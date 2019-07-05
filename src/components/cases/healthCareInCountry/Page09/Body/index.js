/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The Thai government elects launch the campaign over radio and runs a series of ads. It would now like an estimate of the level of demand these centers would face under the expansion of services proposed by your team.
      </BodyText>
      <BodyText>
        The ad campaign is estimated to have increased the number of rural residents planning to use the locations for all primary care services by 2.4 million. Under that estimate, and using the survey results from the earlier page, how many total rural Thai are forecasted to use the locations for all primary care services?
      </BodyText>
      <BlockQuote
        color="green"
      >
        Report your answer not as a share, but in absolute terms (e.g., 20,000,000). Hint: the total number of rural Thai was provided earlier in the case.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
