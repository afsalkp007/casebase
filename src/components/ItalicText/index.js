import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const ItalicText = function ItalicText({ children }) {
  return (
    <Text style={{ fontStyle: 'italic' }} >
      { children }
    </Text>
  );
};

const propTypes = {
  children: PropTypes.string.isRequired,
};

ItalicText.propTypes = propTypes;

export default ItalicText;

