/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
import FreeResponseInitial from '../../../../block-quotes/FreeResponseInitial';
// 720 x 941
import tableOneSrc from '../assets/tableOne/index.png';
import ItalicText from '../../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Feedtech recognizes that under current projections, the deal does not generate a substantial profit for Talumet Farm and is probably not feasible. In order to keep negotiations alive, Feedtech agrees to pay Talumet Farm $100,000 per year for the 10 years that Feedtech has exclusive promotional rights for Talumet Farm and its racehorses.
      </BodyText>
      <BodyText>
        The owners are content with the annual profit forecast under the revised deal ($353,500). However, thus far we have not considered the opportunity costs Talumet Farm incurs by granting Feedtech exclusive promotional rights over the next 10 years.
      </BodyText>
      <BodyText>
        Traditionally, Talumet sold promotional rights individually. That gave the farm a degree of flexibility over what it could charge, spectacular horses commanding sharply higher fees.
      </BodyText>
      <BodyText>
        Below is a list of top earners, measured by promotional earnings <ItalicText>only</ItalicText>. Next to that is a list of the highest grossing years for promotional right revenues. Figures in both lists have been adjusted to 2014 price levels.
      </BodyText>
      <ImageFrame
        source={tableOneSrc}
        aspectRatio={720 / 941}
      />
      <BodyText>
        What can you conclude about promotional revenues from the above tables?
      </BodyText>
      <FreeResponseInitial />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
