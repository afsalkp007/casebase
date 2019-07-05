/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Fraction from '../../../../Fraction';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        After further consideration, the team decides that any budget scoring of the proposal should also take into account the program’s effect on national income and, transitively, on tax revenues. In total, the expansion is expected to add over 4.8 billion baht per year to Thai national income, with <Fraction>5/8</Fraction> of those income gains benefiting rural families. Generally poorer than their urban counterparts, this additional income will be taxed at an average rate of 5%.
      </BodyText>
      <BodyText>
        The other <Fraction>3/8</Fraction> of the income gains will go to urban families (who are taxed at a higher average rate), and generate an estimated 750 million baht in additional revenue over the five year period.
      </BodyText>
      <BodyText>
        Accounting for the total additional revenue, how should the budget be scored over the five year span?
      </BodyText>
    </View>
  );
};

export default Body;
