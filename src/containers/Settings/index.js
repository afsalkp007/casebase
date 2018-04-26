import React from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import * as actions from '../../actions';

const mapStateToProps = state => state;

class Settings extends React.Component {

  static navigationOptions = () => ({
    title: 'Case Settings',
  });

  clearCases(caseIndex, pages) {
    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    this.props.clearResponses(keys);
  }

  handleClearPress(caseIndex, pages) {
    Alert.alert(
      'Confirm Clear',
      'Are you sure you want to clear your responses for this case?',
      [
        {
          text: 'Cancel',
          onPress: () => 'cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => this.clearCases(caseIndex, pages),
        },
      ],
    );
  }

  render() {
    const {
      name,
      caseIndex,
      pages,
    } = this.props.navigation.state.params;

    return (
      <View>
        <View
          style={styles.bodyText}
        >
          <Text
            style={styles.settingsText}
          >
            CASE TITLE:
          </Text>
          <Text>
            {name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => this.handleClearPress(caseIndex, pages)}
        >
          <Text style={styles.buttonText}>
            Clear Responses
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Settings.propTypes = {
  clearResponses: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(Settings);
