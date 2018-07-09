/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
// 581×628
import imgSrc from '../assets/figureOne/aroma-flip-3.png';
import ImageFrame from '../../../../ImageFrame';

const Body = function Body() {
  return (
    <View>

      <BodyText>
        Relative market share (RMS) is a ratio of a company’s market share to that of its leading competitor. As a measure of market dominance, it is better at taking into account broad market fragmentation. A company with an RMS greater than one is the market leader, and outperforms the nearest competitor by that factor.
      </BodyText>
      <BodyText>
        The graph below shows Arabel’s market share in the three segments we have chosen for further study. In which segment is Arabel’s RMS the highest?
      </BodyText>
      <ImageFrame
        source={imgSrc}
        aspectRatio={581 / 628}
      />
    </View>
  );
};

export default Body;
