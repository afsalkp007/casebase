import { StyleSheet } from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

const styles = {

  homeContainer: {
    flex: 1,
  },

  flexFiller: {
    flex: 1,
  },

  heading: {
    padding: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 34,
    letterSpacing: 0.25,
    lineHeight: 50,
    fontWeight: '200',
    color: colors.secondaryText,
    fontFamily: fonts.sansSerifRegular,
    marginBottom: 10,
    padding: 0,
  },

  subtitle: {
    fontWeight: '300',
    color: colors.secondaryText,
    textAlign: 'center',
  },

  subtitleLarge: {
    fontSize: 20,
    lineHeight: 30,
  },

  subtitleSmall: {
    fontSize: 16,
    fontWeight: '200',
  },

  horizontalCenter: {
    alignItems: 'center',
  },

  footer: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
  },

  sourceGit: {
    flexDirection: 'row',
  },

  footerText: {
    color: colors.secondaryText,
    textAlign: 'center',
  },

};

export default StyleSheet.create(styles);
