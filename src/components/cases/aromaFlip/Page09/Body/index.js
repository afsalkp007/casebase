/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Finally, your team takes a look at Arabel’s profit margins.
      </BodyText>
      <BodyText>
        In the last fiscal year, the company’s gross profit margins in men’s hygiene just barely reached 1%.
      </BodyText>
      <BodyText>
        That margin is low compared with the rest of the industry, where the average has hovered around 15% in recent years. However, your team views this as a potential positive: Arabel’s low profit margins should lower the acquisition price.
      </BodyText>
      <BodyText>
        Executives at Bastion tell you they’re confident they can narrow the difference between Arabel’s profit margins and the segment average. They forecast that each year the gap will shrink by a third.
      </BodyText>
      <BodyText>
        In how many years will Arabel see profit margins north of 10%?
      </BodyText>
    </View>
  );
};

export default Body;
