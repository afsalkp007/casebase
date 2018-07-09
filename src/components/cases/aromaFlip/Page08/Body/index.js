/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Fraction from '../../../../Fraction';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Arabel’s market share in men’s hygiene (15%) provides another reason to consider expansion in that direction.
      </BodyText>
      <BodyText>
        However, Arabel’s relative market share in that segment is not that large. The directors of Bastion would like to compare Arabel’s RMS with that of the leading competitor.
      </BodyText>
      <BodyText>
        You know that Arabel is the fourth largest company in the segment, and that the second largest has a market share <Fraction>1/3</Fraction> larger than Arabel’s.
      </BodyText>
      <BodyText>
        What is the RMS for the leading competitor in men’s hygiene?
      </BodyText>
    </View>
  );
};

export default Body;
