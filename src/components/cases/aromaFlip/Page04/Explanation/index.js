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
        Men’s hygiene has the highest profit multiples
      </Header>
      <BodyText>
        To answer this question precisely, run through each market segment and calculate an average profit multiple for each. However, a precise answer is unnecessary. A cursory examination of the data shows that men’s hygiene has been commanding the highest profit multiples.
      </BodyText>
      <BodyText>
        For air fresheners, companies have recently been selling for something like 3.5× times their profits.
      </BodyText>
      <BodyText>
        For women’s hygiene, companies have recently been selling for around 5× their profits.
      </BodyText>
      <BodyText>
        For men’s hygiene, companies have recently been selling for around 7× their profits.
      </BodyText>
      <BodyText>
        Men’s hygiene, therefore, is the market segment with the highest profit multiples.
      </BodyText>
    </View>
  );
};

export default Explanation;
