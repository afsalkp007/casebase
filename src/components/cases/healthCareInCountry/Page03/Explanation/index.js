/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Header from '../../../../Header';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        5.28 billion baht
      </Header>
      <BodyText>
        All that needs to be done is to take 40% of 13.2 billion:
      </BodyText>
      <MathText>
        13.2 billion × 40% = 5.28 billion
      </MathText>
      <BodyText>
        This is a rather straightforward question, only one that involves large numbers. The burden on your working memory is reduced if you consider the numbers in terms of values rather than digits (13.2 billion versus 13200000000). Our approach would be to simply take 10% of 13.2 billion - which equals 1.32 billion - and then multiply that value by 4, giving 5.28 billion.
      </BodyText>
      <BodyText>
        There are other approaches (e.g., you could multiply by 4 and then divide by 10) but your process should not have involved more than two steps.
      </BodyText>
    </View>
  );
};

export default Explanation;
