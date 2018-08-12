/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Overline from '../../../../Overline';
import Header from '../../../../Header';
import Divider from '../../../../Divider';
import I from '../../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <Overline>
        Accenture &#62; PRACTICE CASE ONE
      </Overline>
      <Header>
        The Sport of Kings
      </Header>
      <Divider />
      <BodyText>
        Your client is Talumet Farm, one of the most storied horse farms in American history.
      </BodyText>
      <BodyText>
        Talumet’s greatest successes came near the close of the Second World War, when the farm bred a slew of now legendary colts, including <I>Whirlaway</I> and <I>Citation</I>. Those two thoroughbreds alone netted Talumet Farm over $1.5 million dollars, a tremendous sum in that period.
      </BodyText>
      <BodyText>
        The farm continues to breed racehorses, though with less conspicuous success. The circuits have become far more competitive than they were in the mid-1940s, as horse farms funded by Middle Eastern oil wealth become increasingly dominant.
      </BodyText>
      <BodyText>
        Talumet is jointly owned by a handful of families, who manage the farm through a board of trustees. Recently, Talumet was contacted by Feedtech, a major producer of animal feed supplements. As part of an effort to publicize the company’s products, Feedtech would like to sponsor an expansion of Talumet Farm.
      </BodyText>
      <BodyText>
        Talumet’s board of trustees has hired your team to help evaluate the potential of this opportunity. Read through the following pages to help form your recommendations.
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
