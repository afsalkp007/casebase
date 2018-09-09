/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
// 720 x 779
import figureOneSrc from '../assets/figureOne/index.png';
import BlockQuote from '../../../../BlockQuote';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        That refinement in the estimates brings forecasted annual profit for the new stables down below $200,000. Split across several families, it may not be enough to justify the risks and labor that an expansion would require.
      </BodyText>
      <BodyText>
        Currently, Talumet’s horses exclusively participate in flat racing, the most traditional and popular form of racing in the United States, with horses sprinting down a track or around a circuit. However, jump racing (also known as steeplechasing) is another form of racing popular in the Southeastern portion of the United States.
      </BodyText>
      <BodyText>
        While the winners’ purses with jump racing are far smaller (reflecting the sport’s comparatively small interest base), Talumet’s trainers believe they could attain higher CPI ratios for horses trained in this form. Because jump racing attracts largely regional competitors, Talumet’s horses will not have to compete against California stables, or stables funded by international owners.
      </BodyText>
      <BodyText>
        Your team does some research on jump racing and generates a CPI forecast for the average Talumet jump racer, along with the monthly upkeep cost for such a horse. Those estimates, along with the corresponding estimates for flat races and an estimate for the average race purse for both, are graphed below.
      </BodyText>
      <ImageFrame
        source={figureOneSrc}
        aspectRatio={720 / 779}
      />
      <BodyText>
        Roughly, what would be the net effect on annual profit of replacing one of the flat racers with a jump racer in the proposed expansion, so that there would be nine flat racers and one jump racer? If the effect on profit is negative, start your answer with the negative sign.
      </BodyText>
      <BlockQuote
        color="blue"
      >
        Assume that purses make up 40% of a jump horse’s revenue stream, and that the horses participate in an average of six races per year.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
