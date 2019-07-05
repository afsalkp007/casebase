/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import ItalicText from '../../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The Thai government is concerned that some rural residents won’t use the expanded health facilities since the joint pharmacy/convenience stores - referred to as Rankhayas in Thailand -  are not commonly associated with the official ministry of public health.
      </BodyText>
      <BodyText>
        To evaluate this concern the ministry conducted a random phone survey, using the following script:
      </BodyText>
      <ItalicText>
        &nbsp;
      </ItalicText>
      <ItalicText>
        If your nearest Rankhaya location began offering basic health services,would you visit for your health needs?
      </ItalicText>
      <ItalicText>
        &nbsp;
      </ItalicText>
      <ItalicText>
        Choose one of the following:
      </ItalicText>
      <ItalicText>
        &nbsp;
      </ItalicText>
      <ItalicText>
        A. No, under any circumstances
      </ItalicText>
      <ItalicText>
        B. Yes, but only for vaccinations
      </ItalicText>
      <ItalicText>
        C. Yes, but only for checkups
      </ItalicText>
      <ItalicText>
        D. Yes, for all primary care
      </ItalicText>
      <ItalicText>
        &nbsp;
      </ItalicText>
      <BodyText>
        20% of the respondents reported living in urban areas, and were not the target of interest for the survey. Out of all respondents, 75 reported “No under any circumstances”, while 150 reported yes for either vaccinations or checkups. Of those who responded  “Yes, for all my primary care needs,” 15% of them (30 individuals) live in urban areas.
      </BodyText>
      <BodyText>
        What share of rural Thai reported being willing to use Rankayas for all primary care needs?
      </BodyText>
      <BlockQuote
        color="blue"
      >
        Report your answer in percentage points (e.g., enter 22.5 for 22.45%).
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
