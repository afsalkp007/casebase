/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Radio is the better medium
      </Header>

      <BodyText>
        We’re interested in reaching as many rural Thai as possible, with the given budget. That means we need to minimize the cost per individual reached. We’ll start by calculating the number of rural residents reached by the television campaign.
      </BodyText>
      <BodyText>
        That campaign has a total reach of 20 million. But only 40% of those viewers are rural residents. So only 8 million viewers are part of our target audience:
      </BodyText>
      <MathText>
        20 million × 40% = 8 million
      </MathText>
      <BodyText>
        If the total cost for the television campaign is 240 million baht, then the government spends 30 baht per viewer:
      </BodyText>
      <MathText>
        240 million / 8 million = 30
      </MathText>
      <BodyText>
        Now turn to the radio campaign, where 8 million total residents are reached, 75% of whom live in rural areas. That’s 6 million rural listeners.
      </BodyText>
      <MathText>
        8 million × 75% = 6 million
      </MathText>
      <BodyText>
        So with a cost of 162 million baht, the cost per listener for the government equals 27 baht:
      </BodyText>
      <MathText>
        162 million / 6 million = 27
      </MathText>
      <BodyText>
        If, as the prompt stated, radio and television are equally effective in swaying listeners/viewers, the lower cost per impression for the radio ad makes it the preferred choice.
      </BodyText>
      <BodyText>
        Consulting firms often try and give their questions counterintuitive answers (“the radio campaign has a lower cost per impression despite its much more limited reach!”). That being said, don’t go looking for such answers. Take the problem, walk through it, and report what you find.
      </BodyText>
    </View>
  );
};

export default Explanation;
