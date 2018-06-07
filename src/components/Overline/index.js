import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Overline = function Overline({ children }) {
  return (
    <Text style={styles.overline} >
      { children }
    </Text>
  );
};

const propTypes = {
  children: PropTypes.string.isRequired,
};

Overline.propTypes = propTypes;

export default Overline;

