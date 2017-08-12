import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import CasePanel from '../../components/CasePanel';
import cases from '../../services/cases';
import styles from './styles';

class Home extends React.Component {

  static navigationOptions = {
    title: 'Practice Cases',
  }

  constructor(props) {
    super(props);
    this.state = {
      lastModified: []
    };
  }

  componentDidMount() {
    const lastModKeys = cases.map((e, i) => `LastModifiedc${i}`);
    AsyncStorage.multiGet(lastModKeys, (err, stores) => {
      const lastModified = stores.map(res => res[1]);
      this.setState({ lastModified });
    });

  }

  render() {
    const { navigation } = this.props;
    const { lastModified } = this.state;

    return (
      <View style={styles.homeContainer}>
        <ScrollView>
          {cases.map((e, i) => <CasePanel
            {...e}
            key={e.name}
            caseIndex={i}
            navigation={navigation}
            lastModified={lastModified[i]}
          />)}
        </ScrollView>
        <View style={styles.flexFiller} />
        <View style={[styles.footer, styles.horizontalCenter]}>
          <View style={[styles.contactSection, styles.horizontalCenter]}>
            <Text style={styles.contactText}>
              Questions? Found a bug?
            </Text>
            <Text style={styles.contactText}>
              We'd love to hear from you. Contact us at:
            </Text>
            <Text style={styles.emailText}>
              contact@caseinterviewprep.com
            </Text>
          </View>
          <Text style={styles.madeWithText}>
            Made with ❤️ in NYC
          </Text>
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Home;
