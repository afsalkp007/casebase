import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
// for details: https://github.com/lrettig/react-native-stripe/issues/24
// eslint-disable-next-line import/no-unresolved, import/extensions
import styles from './styles';

function ImageFrame({ source, aspectRatio }) {
  return (
    <View
      style={styles.imageContainer}
    >
      <Image
        style={[ styles.image, { aspectRatio } ]}
        source={source}
        resizeMode="contain"
      />
    </View>
  );
}

const propTypes = {
  source: PropTypes.number.isRequired,
  aspectRatio: PropTypes.number,
};

const defaultProps = {
  style: {},
};

ImageFrame.propTypes = propTypes;
ImageFrame.defaultProps = defaultProps;

export default ImageFrame;

