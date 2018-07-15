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
        Proofreading services
      </Header>
      <BodyText>
        This problem requires us to eyeball the graph. Fortunately, the answer is fairly clear.
      </BodyText>
      <BodyText>
        Proofreading services is the only group to see substantial profit declines over the past four years, but the disproportionate declines in revenue means the group’s profit margins rose. Eyeball estimates suggest the margins went from 6-7% to around 10%.
      </BodyText>
      <BodyText>
        Content production profits fell even as revenues remained roughly stable. That translates into mediocre profit margin performance.
      </BodyText>
      <BodyText>
        Full services showed some small gains in profit, but that came with small gains in revenue. The trend in profit margins was probably slightly positive.
      </BodyText>
    </View>
  );
};

export default Explanation;
