/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';
import BoldText from '../../../../BoldText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        Expected revenue of $57,500
      </Header>
      <BodyText>
        Referencing the pie chart on the previous page, we have now calculated the expected revenue resulting from three out of four potential outcomes:
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;No wins - $0
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;One win - $56,000
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;All wins - $100
      </BodyText>
      <BodyText>
        To find the overall expected revenue in a given year, we simply have to add in the expected revenue due to the possibility of a standout horse winning two Triple Crown races.
      </BodyText>
      <BodyText>
        Overall there is a roughly 3% chance of this happening, and three different ways – equally possible under our rule of thumb – that it could come about. In the below, W represents a win and L a loss. The order of the races is Derby, Preakness, Belmont. Note that revenue generated is higher in the first two cases, since the victories include Derby wins.
      </BodyText>
      <MathText>
        0.1% × $1m = $1,000
      </MathText>
      <BodyText>
        Now, these probabilities only apply if Talumet farm produces a standout horse. Since there’s just a 10% chance of that occurring, the actual expected revenue is:
      </BodyText>
      <MathText>
        10% × $1,000 = $100
      </MathText>
      <BodyText>
        <BoldText>
          Possibility One: W,W,L
        </BoldText>
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Revenue generated: $500k
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Likelihood: 1%
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Expected Revenue: $5k
      </BodyText>
      <BodyText>
        <BoldText>
          Possibility Two: W,L,W
        </BoldText>
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Revenue Generated: $500k
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Likelihood: 1%
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Expected Revenue: $5k
      </BodyText>
      <BodyText>
        <BoldText>Possibility Three: L,W,W</BoldText>
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Revenue Generated: $400k
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Likelihood: 1%
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;Expected Revenue: $4k
      </BodyText>
      <BodyText>
        Summing these values, and then discounting by the 10% probability of even producing a standout horse in a given season, leaves an expected value from a two victory horse of:
      </BodyText>
      <MathText>
        (5k + 5k + 4k) × 10% = $1.4k
      </MathText>
      <BodyText>
        Combining the values from the four potential outcomes, we find that in a given year, the expected value of promotional revenue equals:
      </BodyText>
      <MathText>
        $56,000 + $1,400 + $100 = $57,500
      </MathText>
    </View>
  );
};

export default Explanation;
