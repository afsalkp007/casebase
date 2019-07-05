/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Header from '../../../../Header';

const Explanation = function Explanation() {
  return (
    <View>
      <Header>
        13.2 billion baht
      </Header>
      <BodyText>
        First, calculate the number of families that rely on the public care system. With 44 million rural Thais and four people per family on average, that’s 11 million rural families in total:
      </BodyText>
      <MathText>
        44 million / 4 = 11 million
      </MathText>
      <BodyText>
        Now with these families spending 100 baht per month on average to access care, total monthly spending by the 11 million families equals 1.1 billion baht:
      </BodyText>
      <MathText>
        11 million × 100 = 1.1 billion
      </MathText>
      <BodyText>
        To make this a yearly figure simply multiply it by 12, giving 13.2 billion baht in total spending per year:
      </BodyText>
      <MathText>
        1.1 billion × 12 = 13.2 billion
      </MathText>
      <BodyText>
        A couple of things to note with this question. First, before obtaining additional information, we didn’t have all the figures needed to answer the question and some of the numbers we are given - average annual income in this instance - are extraneous.
      </BodyText>
      <BodyText>
        This will occur on occasion in case interviews. Interviewers are as interested in seeing whether you can identify the necessary information as they are in seeing whether you can use those numbers to arrive at the correct response.
      </BodyText>
      <BodyText>
        Second, while the magnitude of the final answer is quite large (in the billions), a deliberate approach allows you to avoid any truly difficult calculations. Nowhere in the question were you forced to multiply two numbers both above the hundreds magnitude, or any two numbers with more than three combined significant figures.
      </BodyText>
      <BodyText>
        Questions with large numbers are often just as easy as those with small numbers, as long as one can keep track of the magnitudes.
      </BodyText>
    </View>
  );
};

export default Explanation;
