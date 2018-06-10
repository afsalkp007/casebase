/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import ImageFrame from '../../../../ImageFrame';
// 1080w 1200h
import figureOneSrc from '../assets/figureOne/index.png';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Executives at Crestgate tell you they&apos;re less concerned about market share than they are about sales revenues.
      </BodyText>
      <BodyText>
        To boost revenues coming from Dizcount Mart, executives propose raising prices. The sales team opposes the move, however, arguing that the price hike would mean fewer sales of Crestgate toothpaste.
      </BodyText>
      <BodyText>
        You have your team estimate the demand curve for the company&apos;s toothpaste at Dizcount Mart. Their work is below.
      </BodyText>
      <ImageFrame
        source={figureOneSrc}
        aspectRatio={1080 / 1200}
      />
      <BodyText>
        If your objective is to maximize revenue, do you support the executives&apos; recommendation or the sales representatives&apos; opposition?
      </BodyText>
    </View>
  );
};

export default Body;
