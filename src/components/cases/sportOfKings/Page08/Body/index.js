/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
// 720 x 626
import figureOneSrc from '../assets/figureOne/index.png';
import ItalicText from '../../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Calculating potential revenues in the event one of Talumet’s horses <ItalicText>does</ItalicText> win a Triple Crown race is a bit trickier.
      </BodyText>
      <BodyText>
        Using the rule of thumb from the previous page, your team puts together the pie chart below, detailing the likelihood of the four possible scenarios in a season that Talumet produces an outstanding horse. Because of rounding, the numbers don’t sum perfectly to 100, but the differences are marginal and will not affect the analysis.
      </BodyText>
      <BodyText>
        If you would like, you can check the calculated probabilities by running your own calculations.
      </BodyText>
      <ImageFrame
        source={figureOneSrc}
        aspectRatio={720 / 626}
      />
      <BodyText>
        It hasn’t happened since <ItalicText>Affirmed</ItalicText> in 1978, but your team estimates that if a horse was to win a Triple Crown, it would generate around $1 million in promotional revenues.
      </BodyText>
      <BodyText>
        If a horse wins just one of the Triple Crown races, your team forecasts $200,000 in promotional revenue, unless that race is the Derby which would generate $300,000. If the horse wins <ItalicText>two</ItalicText> Triple Crown races, your team forecasts $400,000 in revenue, with $500,000 forecast if one of those two races is the derby.
      </BodyText>
      <BodyText>
        In any given year, what is the expected promotional revenue from winning the full Triple Crown?
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
