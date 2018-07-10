/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Overline from '../../../../Overline';
import Header from '../../../../Header';
import Divider from '../../../../Divider';
import B from '../../../../BoldText';

const Body = function Body() {
  return (
    <View>
      <Overline>
        Deloitte &#62; PRACTICE CASE ONE
      </Overline>
      <Header>
        Publishing House Profits
      </Header>
      <Divider />
      <BodyText>
        It is a truth universally acknowledged, that the growth of e-books and internet commerce has placed increasing pressure on traditional book publishers and particularly on their profits.
      </BodyText>
      <BodyText>
        Your client is one such publisher. Based in London, Marlin Press has been a major publishing house almost since its establishment in the early 50s. Profitability, while not stellar, has been steady through most of the company’s history.
      </BodyText>
      <BodyText>
        However more recently, Marlin - and other publishing houses across the globe - have seen declines in profitability. Because the entire industry is experiencing this trend, Marlin executives feel that the slump is driven by external headwinds, not internal inefficiencies. Still, they recognize that the company needs to pivot.
      </BodyText>
      <BodyText>
        Marlin has called your team in to advise its Editorial Services (ES) division. The division is further subdivided into the following semi-autonomous groups:
      </BodyText>
      <BodyText>
        <B>Proofreading</B>: Corporations and other organizations pay Marlin Press to proofread brochures, promotional material etc. Payment is by word, with a minimum.
      </BodyText>
      <BodyText>
        <B>Content Production</B>: This group produces work as brief as summary blurbs for movies and as long as ghostwriting books for public figures.
      </BodyText>
      <BodyText>
        <B>Full Service Assistance</B>: A relatively new group at Marlin, customers are largely small businesses looking for help with the full process of publishing written content. Marlin oversees with the writing, the content editing, the proofreading, and the distribution.
      </BodyText>
      <BodyText>
        Historically, Editorial Services was one of Marlin’s smaller divisions. The traditional publishing division produced far higher revenues, supported by the healthy cut Marlin took on each published book sold. Recently, these margins have tightened sharply, driving the profit declines.
      </BodyText>
      <BodyText>
        Read through the following pages to inform your recommendations for Marlin.
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
