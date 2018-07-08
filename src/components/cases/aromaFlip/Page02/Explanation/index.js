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
        Men’s hygiene is attractive for its high growth rate
      </Header>

      <BodyText>
        Size and growth are the two market characteristics we have data on. Markets are attractive if they are large or experiencing fast growth (ideally both). In this case, the largest market, women’s hygiene, is experiencing only moderate growth. Still, if you cited that as an attractive market you would not be off base.
      </BodyText>
      <BodyText>
        The air fresheners market would also have been an acceptable choice.
      </BodyText>
      <BodyText>
        The reason this answer singles out men’s hygiene is that it is similar in size to the air fresheners and women’s hygiene markets, but it has faster growth (more than twice the pace of women’s hygiene).
      </BodyText>
    </View>
  );
};

export default Explanation;
