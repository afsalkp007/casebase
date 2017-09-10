/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import FreeResponseInitial from '../../../../block-quotes/FreeResponseInitial';

const Body = function Body() {
  return (
    <View>
      <BodyText>
These are hefty contribution margins.
      </BodyText>
      <BodyText>
        Would you take this information to the backers of AAT and advise them to make the investment?
      </BodyText>
      <FreeResponseInitial />
    </View>
  );
};

export default Body;
