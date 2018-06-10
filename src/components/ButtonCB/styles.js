import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = {

  button: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  disabledButton: {
    backgroundColor: '#DFDFDF',
  },

  whiteButton: {
    backgroundColor: 'white',
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.75,
  },

  darkText: {
    color: colors.primaryText,
  },

  disabledText: {
    color: '#9F9F9F',
  },

};

export default StyleSheet.create(styles);

