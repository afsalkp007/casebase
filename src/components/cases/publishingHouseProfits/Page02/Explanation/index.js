/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Proofreading drives declines in revenue, not in profit
      </Header>
      <BodyText>
        The revenue declines in the editorial services department are driven almost entirely by the proofreading group. It appears that proofreading revenues have fallen by around 50% over the past three years. Revenues for the other groups have been stable.
      </BodyText>
      <BodyText>
        Interestingly, the declines in revenue have not translated into very large declines in profitability. The revenue declines for proofreading have not been matched one for one with profit declines. That must mean that costs are coming down as well, perhaps as part of some downsizing.
      </BodyText>
      <BodyText>
        It’s also worth noting that, while proofreading accounts for a large share of department revenue, it generated less than a third of the profits in 2014. In addition, some of the lost profitability from proofreading appears to have been made up by small gains in the full service group.
      </BodyText>
    </View>
  );
};

export default Explanation;
