import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = function Header({ children }) {
  return (
    <Text style={styles.header} >
      { children }
    </Text>
  );
};

const propTypes = {
  children: PropTypes.string.isRequired,
};

Header.propTypes = propTypes;

export default Header;

