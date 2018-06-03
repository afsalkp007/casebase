import { 
  Platform,
  StyleSheet,
} from 'react-native';

const styles = {
  pickerInput: {
    ...Platform.select({
      ios: {
        height: 88,
      },
    }),
  },

  pickerInputItem: {
    ...Platform.select({
      ios: {
        height: 88,
      },
    }),
  },

};

export default StyleSheet.create(styles);

