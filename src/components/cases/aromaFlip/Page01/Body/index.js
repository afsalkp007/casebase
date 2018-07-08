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
        Bain &#62; PRACTICE CASE ONE
      </Overline>
      <Header>
        An Aromatic Quick Flip
      </Header>
      <Divider />
      <BodyText>
        Your client is Bastion Capital, a private equity firm. The firm is considering acquiring Arabel Flavors & Fragrances, a company that offers a diversified line of fragrance products in numerous market segments.
      </BodyText>
      <BodyText>
        Bastion would like to sell Arabel within three or four years of acquiring the company.
      </BodyText>
      <BodyText>
        The firm has put together a team of managers to design a targeted growth plan for the company. Arabel has seen declining profits over the past decade, and Bastion will only make the acquisition if it feels there’s a viable roadmap to profitability.
      </BodyText>
      <BodyText>
        Your firm has been hired by Bastion to advise them on the acquisition, and to identify potential growth markets for the company.
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
