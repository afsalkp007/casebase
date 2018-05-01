import React from 'react';
import {
  AsyncStorage,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import * as actions from '../../actions';

class CaseSet extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  constructor(props) {
    super(props);

    this.state = { pageIndex: 0 };
    this.incrementPageIndex = this.incrementPageIndex.bind(this);
  }

  componentDidMount() {
    const { pages, caseIndex } = this.props.navigation.state.params;
    const { handleInput, setSubmitted, registerPrompt } = this.props;

    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    AsyncStorage.multiGet(keys, (err, stores) => {
      let responses = 0;
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        const key = store[i][0];
        const value = store[i][1];
        handleInput(key, value);
        setSubmitted(key, (value !== null));
        if (value !== null) responses += 1;
        return key;
      });
      this.setState({ responses });
    });
    AsyncStorage.getItem('LastPrompted', (err, lastPrompted) => {
      registerPrompt(lastPrompted || String(new Date()));
    });
  }

  incrementPageIndex(count) {
    const { pageIndex } = this.state;
    const { pages } = this.props.navigation.state.params;
    this.setState({
      pageIndex: (((pageIndex + count) % pages.length) + pages.length) % pages.length,
    });
  }

  render() {
    const { pages, caseIndex } = this.props.navigation.state.params;
    const { registerPrompt, lastPrompted, responseCount } = this.props;
    const { pageIndex } = this.state;

    const CurrentPage = pages[pageIndex];
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <CurrentPage
            {...this.props}
            caseIndex={caseIndex}
            pageIndex={pageIndex}
            responseCount={responseCount}
            lastPrompted={lastPrompted}
            registerPrompt={registerPrompt}
            incrementPageIndex={this.incrementPageIndex}
          />
        </View>
      </View>
    );
  }
}

const propTypes = {
  handleInput: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        pages: PropTypes.array.isRequired,
        caseIndex: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  setSubmitted: PropTypes.func.isRequired,
  registerPrompt: PropTypes.func.isRequired,
  lastPrompted: PropTypes.string.isRequired,
  responseCount: PropTypes.number.isRequired,
};

CaseSet.propTypes = propTypes;

const mapStateToProps = state => ({
  handleInput: state.handleInput,
  setSubmitted: state.setSubmitted,
  modalById: state.modalById,
  responseById: state.responseById,
  submitResponse: state.submitResponse,
  submittedById: state.submittedById,
  toggleModal: state.toggleModal,
  lastPrompted: state.lastPrompted,
  registerPrompt: state.registerPrompt,
  responseCount: state.responseCount,
});

export default connect(
  mapStateToProps,
  actions,
)(CaseSet);
