import { StyleSheet } from 'react-native';

const styles = {

  casePage: {
    flex: 1,
  },

  casePageContainer: {
    flex: 1,
  },

  bodyContainer: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 120,
  },

  bottomBorder: {
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#d6d7da',
  },

  buttonRow: {
    display: 'flex', 
    flexDirection: 'row', 
    height: 65,
  },

  navigationButton: {
    flex: 0.5,
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigationButtonIcon: {
    width: 24,
    height: 24,
  },

};

export default StyleSheet.create(styles);

