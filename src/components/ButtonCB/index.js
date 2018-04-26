import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonCB = function ButtonCB({
  onPress,
  disabled = false,
  children,
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

const defaultProps = {
  disabled: false,
};

ButtonCB.propTypes = propTypes;
ButtonCB.defaultProps = defaultProps;

export default ButtonCB;

