/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import Subheader from '../../../../Subheader';
import B from '../../../../BoldText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        No correlation between scores and youth per center
      </Subheader>
      <BodyText>
        While the number of youth per center appears correlated with higher assessment scores  among regional peers, that is a meagre sample and may be leading us to an inaccurate conclusion.
      </BodyText>
      <BodyText>
        If we examine the results for developed economies and those with comparable GDP per capita, we see that the perceived relationship between center size and performance is illusory: in the full sample, assessment scores are not closely correlated with the number of youth per center. In fact, the highest scoring program (Developed B) has the second fewest youth per center.
      </BodyText>
      <BodyText>
        In terms of other areas for exploration, none of the indicators here appear to be particularly predictive of a national program&apos;s performance. There appears to be a slight positive relationship between youth per caregiver and the UN assessment score. That could be evidence of some benefits from consolidation (though not geographic consolidation as discussed above). However, in the absence of a compelling narrative explaining this relationship, it&apos;s probably better to view it as an artifact of the study&apos;s small sample size.
      </BodyText>
      <BodyText>
        Lastly, the developed economies spend more and obtain better results. That is unsurprising and doesn&apos;t prove that higher spending improves results. Looking at regional and economic peers, spending doesn&apos;t appear to correlate with performance.
      </BodyText>
      <BodyText>
        In short, while the information in the preceding chart is helpful, it doesn&apos;t point to a silver bullet. The information mostly covers the &apos;quantity&apos; dimensions of Laraguay&apos;s program. It might be worthwhile to shift focus to the &apos;quality&apos; dimension. Unfortunately, this is a harder metric to assess with hard data. But reviewing the programming at the centers, the level of qualifications of the caregivers, and the use of program funds may be a reasonable place to start.
      </BodyText>
      <BlockQuote>
        <B>Quick note:</B> There&apos;s often a trend or pattern in the data interviewers give you in case studies. But don&apos;t force a trend if you don&apos;t find one. Speaking lucidly about what you see will always serve you well, and interviewers will guide you in a certain direction if the case requires it.
      </BlockQuote>
    </View>
  );
};

export default Explanation;
