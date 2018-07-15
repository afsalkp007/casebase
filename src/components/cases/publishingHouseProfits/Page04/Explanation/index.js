/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Header from '../../../../Header';
import Fraction from '../../../../Fraction';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Marlin’s share is 2.1%
      </Header>
      <BodyText>
        An eighth of 50 would be roughly:
      </BodyText>
      <MathText>
        12.5% × 50 ≈ 6
      </MathText>
      <BodyText>
        If this is <Fraction>1/10</Fraction> of the total, then there are 6 × 10 or 60 major publishing houses in the US and UK that provide the services.
      </BodyText>
      <BodyText>
        If these groups generated an average of $1.5 million in revenue, then the total revenue generated equals:
      </BodyText>
      <MathText>
        60 × $1.5m = $90 million
      </MathText>
      <BodyText>
        Adding in the $2 million in revenue from Marlin’s full services group, leaves total market revenue of $92 million.
      </BodyText>
      <BodyText>
        Marlin’s market share is therefore:
      </BodyText>
      <MathText>
        $2m / $92m = 1/46
      </MathText>
      <BodyText>
        This is going to be a little larger than <Fraction>1/50</Fraction>, in the area of 2.1%.
      </BodyText>
      <BodyText>
        Exact calculations yield 2.09% as the precise share. Knowing the value will be a little above 2% is the important part.
      </BodyText>
    </View>
  );
};

export default Explanation;
