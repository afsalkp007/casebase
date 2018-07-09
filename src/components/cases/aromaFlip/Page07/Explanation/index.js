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
        Profit multiples are higher in consolidated markets
      </Header>
      <BodyText>
        The data on recent acquisitions showed the highest profit multiples for men’s hygiene, then women’s hygiene, and finally air fresheners. The data on segment market share suggests that the air freshener market is the most fragmented (the leading competitor controls only 10% of the overall market), while men’s hygiene is the least fragmented and women’s hygiene is somewhere between the two.
      </BodyText>
      <BodyText>
        Since we’re only looking at data on two companies for market share and three for recent acquisitions, we can’t draw definitive conclusions. Still, it appears that the profit multiple paid is inversely correlated with the degree of market fragmentation. Profit multiples are highest in the more consolidated market segments.
      </BodyText>
      <BodyText>
        This makes economic sense, as companies that have managed to consolidate a larger share of the market will be viewed as more durable investments.
      </BodyText>
    </View>
  );
};

export default Explanation;
