import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = {

  button: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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

};

export default StyleSheet.create(styles);

