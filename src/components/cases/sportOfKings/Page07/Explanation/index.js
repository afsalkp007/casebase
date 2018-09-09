/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';
import MathText from '../../../../MathText';
import ItalicText from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        2.7% likelihood of non-negligible revenue
      </Header>
      <BodyText>
        In any given year, there are three possible scenarios:
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;1. No standout horse
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;2. Standout horse
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No Triple Crown victory
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;3. Standout horse
      </BodyText>
      <BodyText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yes Triple Crown victory
      </BodyText>
      <BodyText>
        These three scenarios cover all potential outcomes in a given year. Therefore, their probabilities must sum to 100%. We’re interested in the probability of the last one: that is the only scenario that will generate non-negligible promotional revenues.
      </BodyText>
      <BodyText>
        By finding the combined probability of the first two outcomes, <ItalicText>p</ItalicText>, we can calculate the probability of the third outcome as 100% - <ItalicText>p</ItalicText>.
      </BodyText>
      <BodyText>
        The probability that Talumet Farm fails to produce a standout horse altogether is 100% - 10% = 90%.
      </BodyText>
      <BodyText>
        The probability of the second outcome is a little trickier to calculate. If Talumet Farm does produce a standout horse, there is a 100% – 10% = 90% chance that it loses any given Triple Crown race. The likelihood that it loses all three races becomes:
      </BodyText>
      <MathText>
        90% × 90% × 90% = 73%
      </MathText>
      <BodyText>
        So the overall likelihood of producing a standout horse that fails to win a single race is:
      </BodyText>
      <MathText>
        10% × 73% = 7.3%
      </MathText>
      <BodyText>
        That means the combined probability of one of the first two outcomes occurring is:
      </BodyText>
      <MathText>
        90% + 7.3% = 97.3%
      </MathText>
      <BodyText>
        Meaning that the probability of the final outcome must be:
      </BodyText>
      <MathText>
        100% - 97.3% = 2.7%
      </MathText>
    </View>
  );
};

export default Explanation;
