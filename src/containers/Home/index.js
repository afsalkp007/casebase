import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import CasePanel from '../../components/CasePanel';
import cases from '../../services/cases';
import styles from './styles';
import caseBaseIconImgSrc from '../../assets/images/icons/dashboard/case_base_gray.png';

class Home extends React.Component {

  static navigationOptions = {
    title: 'Dashboard',
  }

  constructor(props) {
    super(props);
    this.state = {
      lastModified: [],
    };
  }

  componentDidMount() {
    const lastModKeys = cases.map((e, i) => `LastModifiedc${i}`);
    AsyncStorage.multiGet(lastModKeys, (err, stores) => {
      const lastModified = stores.map(res => res[1]);
      this.setState({ lastModified });
    });
    /* DANGER MAKE SURE THIS IS COMMENTED OUT FOR DEPLOY */
    // AsyncStorage.clear();
  }

  render() {
    const { navigation } = this.props;
    const { lastModified } = this.state;

    return (
      <View style={styles.homeContainer}>
        <ScrollView>
          <View style={styles.heading}>
            <View style={styles.logoAndTitle}>
              <Image
                style={styles.caseBaseIcon}
                source={caseBaseIconImgSrc}
              />
              <Text style={styles.title}>
                CASEBASE
              </Text>
            </View>
            <Text style={[styles.subtitle, styles.subtitleLarge]}>
              {'A repository of case studies'}
            </Text>
            <Text style={[styles.subtitle, styles.subtitleSmall]}>
              {'for the 21st Century.'}
            </Text>
          </View>
          {cases.map((e, i) => <CasePanel
            {...e}
            key={e.name}
            caseIndex={i}
            navigation={navigation}
            lastModified={lastModified[i]}
          />)}
          <View style={[styles.footer, styles.horizontalCenter]}>
            <View style={styles.sourceGit}>
              <Text style={styles.footerText}>
                {'Source ❮❯ on '}
              </Text>
              <Text style={[styles.footerText, { fontWeight: '700' }]}>
                GitHub
              </Text>
            </View>
            <Text style={styles.footerText}>
              OpSoConsulting/casebase-ios
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Home;
