/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Overline from '../../../../Overline';
import Header from '../../../../Header';
import Divider from '../../../../Divider';

const Body = function Body() {
  return (
    <View>
      <Overline>
        McKinsey &#62; PRACTICE CASE TWO
      </Overline>
      <Header>
        Expanding Health Care Access
      </Header>
      <Divider />
      <BodyText>
        Somewhat unique among low income countries, Thailand has a universal health care system, with an extensive network of hospitals and public health centers in both urban and rural areas. While coverage compares favorably with other low-income countries, the costs have strained the country’s public finances, particularly after co-payments were abolished in 2007.
      </BodyText>
      <BodyText>
        The vast majority of health services in Thailand are delivered by the government’s system of hospitals and public health centers. Despite hundreds of locations, there are still large segments of the rural population that have to travel far from their homes to receive basic care.
      </BodyText>
      <BodyText>
        The government of Thailand also owns a network of joint pharmacy/convenience stores, similar to the CVS and Walgreens chains that operate in the United States. Your firm has been hired by the government of Thailand to extend care while containing costs. One possibility is to use these pharmacy locations to distribute a range of health care services, such as vaccinations and primary care.
      </BodyText>
      <BodyText>
        Work through the problems on the following pages to form your recommendations.
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
