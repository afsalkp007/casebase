import { StyleSheet } from 'react-native';

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

  logoAndTitle: {
    flexDirection: 'row',
  },

  caseBaseIcon: {
    height: 40,
    width: 40,
    margin: 5,
  },

  title: {
    fontSize: 30,
    lineHeight: 50,
    fontWeight: '200',
    color: 'rgba(0,0,0,0.54)',
  },

  subtitle: {
    fontWeight: '300',
    color: 'rgba(0,0,0,0.54)',
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
    paddingBottom: 20,
    alignItems: 'center',
  },

  sourceGit: {
    flexDirection: 'row',
  },

  footerText: {
    color: 'rgba(0,0,0,0.54)',
    textAlign: 'center',
  },

};

export default StyleSheet.create(styles);
