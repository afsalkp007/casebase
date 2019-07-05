/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';
import Italic from '../../../../ItalicText';
import Divider from '../../../../Divider';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        50%  of rural respondents
      </Header>

      <BodyText>
        To calculate the share we need two numbers: the number of rural respondents reporting “Yes, for all”, and the overall number of rural respondents. Start by calculating the number reporting “Yes for all”. We’ll represent this group with the character <Italic>n</Italic>.
      </BodyText>
      <MathText>
        .15<Italic>n</Italic> = 30 → <Italic>n</Italic> = 30/.15 → <Italic>n</Italic> = 200
      </MathText>
      <BodyText>
        So there are 200 respondents reporting “Yes, for all”, and rural Thai make up 85% of that total. That means 170 rural Thai respond “Yes, for all”.
      </BodyText>
      <MathText>
        85% × 200  = 170
      </MathText>
      <BodyText>
        Now use these values to calculate the total number of respondents to the survey. There are 200 reporting “Yes, for all”, 150 reporting “Yes, for vaccinations” or “Yes, for checkups”, and 75 reporting “No under any circumstances”. That totals:
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;150
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;75
      </BodyText>
      <Divider />
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;425
      </BodyText>
      <BodyText>
        Since we know that rural respondents make up 80% of the total, we can now calculate that there are 340 total rural respondents:
      </BodyText>
      <MathText>
        80% × 425 = 340
      </MathText>
      <BodyText>
        And finally, we express the 170 rural Thai reporting “Yes, for all” as a ratio to the total 340 rural respondents:
      </BodyText>
      <MathText>
        170 / 340 = 50%
      </MathText>
      <BodyText>
        There is no individually difficult calculation in this problem, but the chain of steps is long. It is understandable if you had to write down some of the numbers. However, working to retain the values in memory makes excellent practice.
      </BodyText>
    </View>
  );
};

export default Explanation;
