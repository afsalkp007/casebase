/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Identify an appropriate valuation method
      </Header>
      <BodyText>
        Options could include:
      </BodyText>
      <BodyText>
        1. Discounted cash flow - we could produce pro-forma financial statements and then apply an appropriate discount rate to value the business today.
      </BodyText>
      <BodyText>
        2. Multiples - we could examine sales of similar businesses, averaging the corresponding EBITDA multiples and applying that to Marlin’s content production group.
      </BodyText>
      <BodyText>
        Marlin must also determine what constitutes an appropriate buyer and what implications a divestiture would have on the publishing house. Considerations may include:
      </BodyText>
      <BodyText>
        1. Would selling to another publishing house provide a strategic advantage to a competitor? What companies are considered competitors and how may a sale affect Marlin’s position in the marketplace?
      </BodyText>
      <BodyText>
        2. What impact would divestiture have on the operations of Marlin? Would reliance on outside vendors for content production have any negative impact on the quality or speed of Marlin’s other work? Would costs for these services rise as a result of the divestiture?
      </BodyText>
    </View>
  );
};

export default Explanation;
