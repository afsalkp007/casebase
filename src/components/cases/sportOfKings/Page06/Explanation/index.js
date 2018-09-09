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
        Disagree, this trend cannot continue linearly
      </Header>
      <BodyText>
        From the table on the previous page, ‘other’ promotional revenue has ranged from $5,000 to $35,000 dollars in the most recent decades. We can assume that it has been roughly in that range in previous years.
      </BodyText>
      <BodyText>
        There are two reasons then to believe that projections should not include an annual decline in ‘other’ promotional revenue of $2,500.
      </BodyText>
      <BodyText>
        First, there is clearly some volatility in the series. The computed average decline could have been an artifact of one bad year for ‘other’ promotional revenues. We’d want to look at a longer history before projecting out a substantial annual decline.
      </BodyText>
      <BodyText>
        Second, few trends continue at a linear rate indefinitely. If a social network adds 500 million users in its first six months of activity, it’s foolish to infer that it will have over 10 billion users in ten years. In this instance, if we project heavy annual declines each year, we would eventually project negative revenues, which is nonsensical.
      </BodyText>
    </View>
  );
};

export default Explanation;
