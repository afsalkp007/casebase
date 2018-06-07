import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = {

  // based on:
  // https://material.io/design/typography/the-type-system.html#applying-the-type-scale
  overline: {
    fontFamily: fonts.sansSerifBold,
    fontSize: 11,
    letterSpacing: 0,
    marginBottom: 8,
    color: colors.primaryText,
  },

};

export default StyleSheet.create(styles);

