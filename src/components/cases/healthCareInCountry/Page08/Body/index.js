/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
// 1440 x 800
import figureOneSrc from '../assets/figureOne/index.png';
import BlockQuote from '../../../../BlockQuote';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        To combat this wariness among rural Thai, the government has budgeted one billion baht for a public awareness campaign. The campaign will remind residents that the Rankhaya locations are officially associated with the ministry of health and advertise for some health services the centers already provide.
      </BodyText>
      <BodyText>
        Currently, officials are deciding whether to broadcast the campaign over radio or television. Review some details relevant to that decision below.
      </BodyText>
      <ImageFrame
        source={figureOneSrc}
        aspectRatio={1440 / 800}
      />
      <BodyText>
        Which medium would accomplish the stated objective more effectively?
      </BodyText>
      <BlockQuote color="blue">
        Assume that, among those they reach, radio and television ads are equally effective in reducing skepticism towards the expanded health service locations. Rural share refers to the percentage of the audience reached that live in rural areas.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
