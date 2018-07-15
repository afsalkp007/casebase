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
        Profit Multiple Basis
      </Header>
      <BodyText>
        Revenue multiples are generally used to evaluate early stage companies, where revenues are growing quickly but profits have not fully materialized. This approach is particularly useful in valuing web companies. Amazon for example makes no profit but still commands a valuation around $150 billion: expected future profits outweigh current losses.
      </BodyText>
      <BodyText>
        However, with a more mature company, a profit multiples generally provides a more accurate valuation: current profits give a fair idea of future profits. As an established publisher, Marlin is not going through rapid growth, nor its content production group. The industry as a whole is shrinking somewhat.
      </BodyText>
      <BodyText>
        For that reason, a profit multiple will provide the more accurate valuation for Marlin’s content production group.
      </BodyText>
    </View>
  );
};

export default Explanation;
