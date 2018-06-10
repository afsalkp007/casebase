/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import ImageFrame from '../../../../ImageFrame';
import PercentageInitial from '../../../../block-quotes/PercentageInitial';
// w:1080 h:1260
import imgSrc from '../assets/tableOne/index.png';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The first step your team takes is to compile some of the most commonly referenced metrics in program evaluation. The team collects information for Laraguay, but also for three regional peers, three developed economies, and three countries with similar GDP per capita.
      </BodyText>
      <BodyText>
        The findings are displayed below.
      </BodyText>
      <ImageFrame
        source={imgSrc}
        aspectRatio={1080 / 1260}
      />
      <BodyText>
        One of the committee members asks your team to look into the example of Regional Peer C, which outperforms all regional and economic peers on the UN assessment.
      </BodyText>
      <BodyText>
        The committee member believes that Peer C’s disability program benefits from greater consolidation: running fewer disability centers allows for greater concentration of resources and focus.
      </BodyText>
      <BodyText>
        The committee member would like to know what share of Laraguay’s currently existing centers would have to close to bring average center size (in terms of youth per center) in line with Regional Peer C.
      </BodyText>
      <PercentageInitial />
      <BlockQuote>
        0.5% of Laraguay’s population are currently enrolled at the centers. Assume that closings have no effect on the overall number of enrollees in the program.
      </BlockQuote>
    </View>
  );
};

export default Body;
