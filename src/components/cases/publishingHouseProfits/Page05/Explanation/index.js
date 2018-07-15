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
        Expand full services, grow proofreading revenue
      </Header>
      <BodyText>
        The first recommendation is easy enough to form. Marlin is looking for profit growth, and the margins in the full services group are huge. What’s more, it is the only market identified as stable, and there’s room for growth: Marlin’s current market share is only 2%. The group seems to be in decent shape as well, given that its profit margins have held up over the past four years.
      </BodyText>
      <BodyText>
        It’s also important to identify the driver of revenue declines in the proofreading group. If these are part of a deliberate downsizing, it may make sense to continue that strategy with the declining market. If these declines are unintentional, however, reversing them could bring increased profits.
      </BodyText>
      <BodyText>
        Another possibility is the outright sale of the content production division. The return here is ambiguous, but there are reasons to consider it. If Marlin were to pursue aggressive expansion in the full services - as recommended above - it may make sense to sell off one of the other groups to generate some cash. Marlin’s production group has seen falling profit margins (though they remain healthy) and the market as a whole is in decline.
      </BodyText>
      <BodyText>
        What’s more, “quality” is cited as a crucial factor in full service and proofreading purchases, but is not regarded as a major factor in production purchasing decisions. If Editorial Services builds a brand known for quality, that won’t have much of a positive effect on sales for the production group.
      </BodyText>
      <BodyText>
        It’s difficult to know how to interpret the revenue per customer data. It does give some sense of the role played by high value customers. The high means relative to medians for the full services and proofreading groups suggest a handful of high value customers are pulling the mean up. That customer type may be a good focus for expansion.
      </BodyText>
    </View>
  );
};

export default Explanation;
