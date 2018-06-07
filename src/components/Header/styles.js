import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = {

  // based on:
  // https://material.io/design/typography/the-type-system.html#type-scale
  header: {
    fontFamily: fonts.serifBold,
    fontSize: 34,
    letterSpacing: 0.25,
    marginBottom: 8,
    color: colors.primaryText,
  },

};

export default StyleSheet.create(styles);

