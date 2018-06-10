/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
import PercentageSubsequent from '../../../../block-quotes/PercentageSubsequent';
// w:1080 h:1080
import imgSrc from '../assets/figureOne/index.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team investigates further and finds that caregivers in Laraguay are generally less qualified than those in Similar C (fewer years of education and work experience on average).
      </BodyText>
      <BodyText>
        It could be that the low salaries offered by the program make it difficult to attract the better candidates, who can find higher pay in private sector jobs.Your team would like to boost teacher salaries by $5,000, while limiting cost increases by cutting expenditures for center maintenance and upkeep by 20%.
      </BodyText>
      <BodyText>
        Referencing the graph below, what would the new share of spending on caregivers be under the proposed change?
      </BodyText>
      <PercentageSubsequent />
      <ImageFrame
        source={imgSrc}
        aspectRatio={1080/1080}
      />
    </View>
  );
};

export default Body;
