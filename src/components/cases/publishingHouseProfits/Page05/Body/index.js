/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
// 648x453
import figureOneSrc from '../assets/tableOne/publishing__2.png';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        As the final part of your team’s review of the three groups, you are given the graphic below.
      </BodyText>
      <ImageFrame
        source={figureOneSrc}
        aspectRatio={648 / 453}
      />
      <BodyText>
        Using the information above and the calculations you’ve already made, provide Marlin with a broad set of recommendations for how they can improve profitability.
      </BodyText>
      <BodyText>
        Which group should executives focus on for growth, are there any divestment opportunities worth considering?
      </BodyText>
    </View>
  );
};

export default Body;
