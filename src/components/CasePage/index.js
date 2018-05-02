import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ExplanationModal from '../ExplanationModal';
import SubmitButton from '../SubmitButton';
import InputRow from '../InputRow';
import nextIcon from '../../assets/images/icons/cases/ic_navigate_next/ic_navigate_next.png';
import beforeIcon from '../../assets/images/icons/cases/ic_navigate_before/ic_navigate_before.png';

const CasePage = function CasePage({
  answer,
  Body,
  caseIndex,
  Explanation,
  handleInput,
  modalById,
  pageIndex,
  responseById,
  submitResponse,
  submittedById,
  toggleModal,
  responseCount,
  lastPrompted,
  registerPrompt,
  incrementPageIndex,
}) {
  const id = `c${caseIndex}p${pageIndex}`;
  const response = responseById[id];
  const submitted = submittedById[id];

  const modalProps = {
    toggleModal,
    id,
    visible: modalById[id],
    lastPrompted,
    registerPrompt,
    responseCount,
  };

  const inputProps = Object.assign(
    {
      submitted,
      response,
      handleInput,
      id,
    },
    answer,
  );


  const buttonProps = {
    submitResponse,
    toggleModal,
    response,
    submitted,
    id,
  };

  const keyboardAvoidingViewProps = {
    style: styles.casePage,
    contentContainerStyle: styles.casePageContainer,
  };

  if (Platform.OS === 'ios') {
    keyboardAvoidingViewProps.behavior = 'position';
  }

  return (
    <KeyboardAvoidingView
      {...keyboardAvoidingViewProps}
    >
      {(answer.type) ? (
        <ExplanationModal {...modalProps}>
          <Explanation />
        </ExplanationModal>
      ) : <View />}
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Body />
        </View>
      </ScrollView>
      <View>
        {
          (answer.type) && (
            <InputRow {...inputProps} />
          )
        }
        <View style={{ display: 'flex', flexDirection: 'row', height: 65 }}>
          {
            (answer.type) && (
              <SubmitButton {...buttonProps} />
            )
          }
          <TouchableOpacity
            onPress={() => incrementPageIndex(-1)}
            style={styles.navigationButton}
          >
            <Image
              source={beforeIcon}
              style={styles.navigationButtonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => incrementPageIndex(1)}
            style={styles.navigationButton}
          >
            <Image
              source={nextIcon}
              style={styles.navigationButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const propTypes = {
  answer: PropTypes.shape().isRequired,
  Body: PropTypes.func.isRequired,
  caseIndex: PropTypes.number.isRequired,
  Explanation: PropTypes.func,
  handleInput: PropTypes.func.isRequired,
  modalById: PropTypes.shape().isRequired,
  pageIndex: PropTypes.number.isRequired,
  responseById: PropTypes.shape().isRequired,
  submitResponse: PropTypes.func.isRequired,
  submittedById: PropTypes.shape().isRequired,
  toggleModal: PropTypes.func.isRequired,
  responseCount: PropTypes.number.isRequired,
  lastPrompted: PropTypes.string.isRequired,
  registerPrompt: PropTypes.func.isRequired,
  incrementPageIndex: PropTypes.func.isRequired,
};

const defaultProps = {
  Explanation: () => null,
};

CasePage.propTypes = propTypes;
CasePage.defaultProps = defaultProps;

export default CasePage;
