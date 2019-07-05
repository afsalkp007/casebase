/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
// 1440 x 1120
import figureOneSrc from '../assets/figureOne/index.png';

const Body = function Body() {
  return (
    <View>


      <BodyText>
        In addition to the reduced access costs for Thai families, your team has estimated that the expansion of services will improve preventive care and ultimately reduce health costs.
      </BodyText>
      <BodyText>
        The bulk of the savings will come from reduced public expenditures on emergency room services. Of the remaining savings, 80% will come from spending 40 million baht less per year on prescription drug costs.
      </BodyText>
      <BodyText>
        The team compiled the graphic below to detail the forecasted savings. If the Thai government insists that the bill be at least budget neutral - the measure cannot increase the budget deficit over the five year span - does this program meet their requested standards?
      </BodyText>
      <ImageFrame
        source={figureOneSrc}
        aspectRatio={1440 / 1120}
      />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
