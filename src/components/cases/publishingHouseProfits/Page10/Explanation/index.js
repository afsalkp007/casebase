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
        No, this seems like a flawed estimate
      </Header>
      <BodyText>
        This could be argued different ways, but the estimate appears high. For one thing, it is higher than the valuation we calculated earlier using the discounted profit approach.
      </BodyText>
      <BodyText>
        In addition, the profit multiple we use (4.9) is above the profit multiples seen most recently (4.5 and 4.4). We have only five observations, but profit multiples for content production groups appear to be falling. This isn’t surprising given that the market as a whole is in decline.
      </BodyText>
      <BodyText>
        For those reasons, it would probably be more accurate to use a profit multiple around 4.4 or 4.5, significantly lowering our calculated valuation.
      </BodyText>
    </View>
  );
};

export default Explanation;
