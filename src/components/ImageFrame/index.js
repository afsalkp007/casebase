import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
// for details: https://github.com/lrettig/react-native-stripe/issues/24
// eslint-disable-next-line import/no-unresolved, import/extensions
import PhotoView from 'react-native-photo-viewer';
import styles from './styles';

function ImageFrame({ source, style }) {
  return (
    <View
      style={styles.imageContainer}
    >
      <PhotoView
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        style={style}
        source={source}
        resizeMode="contain"
      />
    </View>
  );
}

const propTypes = {
  source: PropTypes.number.isRequired,
  style: PropTypes.shape(),
};

const defaultProps = {
  style: {},
};

ImageFrame.propTypes = propTypes;
ImageFrame.defaultProps = defaultProps;

export default ImageFrame;

