import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import styles from './styles';
import settingsImgSrc from '../../assets/images/icons/settings/ic_settings.png';

const CasePanel = function CasePanel({
  navigation,
  pages,
  name,
  company,
  thumbnail,
  caseIndex,
  lastModified,
  locked,
  sku,
  unlock,
}) {
  function handlePress() {
    if (locked) {
      navigation.navigate('Settings', {
        caseIndex,
        name,
        pages,
        locked,
        unlock,
        sku,
      });
    } else {
      navigation.navigate('CaseSwiper', {
        pages,
        name,
        caseIndex,
      });
    }
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <Image
        style={styles.image}
        source={thumbnail}
      />
      <View
        style={styles.textBody}
      >
        <View style={styles.textMoreRow}>
          <View
            style={styles.titleAndCompany}
          >
            <Text style={styles.title}>
              {name}
            </Text>
            <Text style={styles.company}>
              {company}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings', {
              caseIndex,
              name,
              pages,
              locked,
              sku,
              unlock,
            })}
          >
            <Image
              source={settingsImgSrc}
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.filler}
        />
        <Text style={styles.updated}>
          Last modified: {
            (lastModified)
              ? dateFormat(
                  new Date(lastModified),
                  'mmmm dS, yyyy, h:MM TT',
                )
              : 'Not started'
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const propTypes = {
  caseIndex: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  lastModified: PropTypes.string,
  locked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  sku: PropTypes.string.isRequired,
  thumbnail: PropTypes.number.isRequired,
  unlock: PropTypes.func.isRequired,
};

const defaultProps = {
  lastModified: '',
  locked: false,
};

CasePanel.propTypes = propTypes;
CasePanel.defaultProps = defaultProps;

export default CasePanel;

