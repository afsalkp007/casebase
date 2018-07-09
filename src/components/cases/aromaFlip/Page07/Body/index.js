/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import FreeResponseSubsequent from '../../../../block-quotes/FreeResponseSubsequent';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Studying the graph from the previous page and the graphic compiled by your team detailing recent company acquisitions, are there any connections you can draw?
      </BodyText>
      <FreeResponseSubsequent />
    </View>
  );
};

export default Body;
