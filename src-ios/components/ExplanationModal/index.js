import React from 'react';
import {
  Button,
  Modal,
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import RatingRequestor from 'react-native-rating-requestor';
import styles from './styles';

const RatingTracker = new RatingRequestor('1249514100',
  {
    timingFunction: currentCount => !(currentCount % 6),
    title: 'Will you rate us?',
    message: 'Our app is free and open source. Will you take a moment to rate us on the App Store?',
  },
);


const ExplanationModal = function ExplanationModal({
  children,
  id,
  toggleModal,
  visible = false,
}) {
  const handlePress = function handlePress() {
    RatingTracker.handlePositiveEvent((didAppear, userDecision) => {
      if (didAppear) {
        switch (userDecision) {
          case 'decline': return 'user declined to review';
          case 'delay': return 'user delayed review';
          case 'accept': return 'user agreed to review';
          default: return 'no option was selected';
        }
      } else {
        return 'request popup did not appear. may appear on future trigger';
      }
    });
    toggleModal(id);
  };

  return (
    <Modal
      visible={visible}
    >
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.scrollBody}>
            {children}
          </View>
        </ScrollView>
      </View>
      <View
        style={styles.button}
      >
        <Button
          title="Close Answer"
          onPress={handlePress}
        />
      </View>
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
};

ExplanationModal.defaultProps = defaultProps;
ExplanationModal.propTypes = propTypes;

export default ExplanationModal;
