/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import Header from '../../../../Header';

const Explanation = function Explanation() {
  return (

    <View>
      <Header>
        Promo revenues depend heavily on individual horses
      </Header>
      <BodyText>
        It’s clear from this data that promotional revenues are largely driven by individual outperforming horses. To begin with, the highest grossing years for promotional revenues almost perfectly match the years top earners ran.
      </BodyText>
      <BodyText>
        Without doing an exact calculation, it looks like the promotional revenues for the years listed were almost entirely driven by the earnings of the individual horse that outperformed that year.  For example, in the best year (1948), Citation’s earnings made up something like 90% of all promotional revenues earned for the year. The ratio is similar for other years.
      </BodyText>
      <BodyText>
        This is unsurprising. In all likelihood, horses are used in promotional material rarely. Only truly extraordinary horses will have enough public recognition to provide any promotional benefit.
      </BodyText>
      <BodyText>
        It’s also worth noting that the best promotional years were far in the past. In the past two decades, only two years - 1997 and 2004 - made it on the lists and they were both near the bottom. Given what we noted above, this is most likely driven by the decline in the number of legendary horses coming out of Talumet stables. However, it is also possible that promotional revenues in horseracing have been declining in general.
      </BodyText>
    </View>
  );
};

export default Explanation;
