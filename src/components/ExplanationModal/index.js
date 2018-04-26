import React from 'react';
import {
  Modal,
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import * as StoreReview from 'react-native-store-review';
import ButtonCB from '../ButtonCB';
import styles from './styles';

const ExplanationModal = function ExplanationModal({
  children,
  id,
  toggleModal,
  lastPrompted,
  responseCount,
  registerPrompt,
  visible = false,
}) {
  const handlePress = function handlePress() {
    const minutesSincePrompt = (new Date() - new Date(lastPrompted)) / 1000 / 60;
    if (
      (minutesSincePrompt >= 10)
      && responseCount >= 3
      && StoreReview.isAvailable
    ) {
      StoreReview.requestReview();
      registerPrompt(String(new Date()));
    }
    toggleModal(id);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => null}
    >
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.scrollBody}>
            {children}
          </View>
        </ScrollView>
      </View>
      <ButtonCB onPress={handlePress}>
          Close Answer
      </ButtonCB>
    </Modal>
  );
};

const defaultProps = {
  visible: false,
};

const propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  lastPrompted: PropTypes.string.isRequired,
  responseCount: PropTypes.number.isRequired,
  registerPrompt: PropTypes.func.isRequired,
};

ExplanationModal.defaultProps = defaultProps;
ExplanationModal.propTypes = propTypes;

export default ExplanationModal;
