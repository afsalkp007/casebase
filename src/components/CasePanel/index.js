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
import settingsImgSrc from '../../assets/images/icons/panel/settings.png';
import bookImgSrc from '../../assets/images/icons/panel/book.png';
import calendarImgSrc from '../../assets/images/icons/panel/calendar.png';

const CasePanel = function CasePanel({
  navigation,
  pages,
  name,
  company,
  blurb,
  thumbnail,
  caseIndex,
  lastModified,
}) {
  function handlePress() {
    navigation.navigate('CaseSet', {
      pages,
      name,
      caseIndex,
    });
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <View
        style={styles.panelBody}
      >
        <View style={styles.textMoreRow}>
          <View
            style={styles.titleCompanyLogo}
          >
            <Image
              style={styles.image}
              source={thumbnail}
            />
            <View style={styles.titleAndCompany}>
              <Text style={styles.title}>
                {name}
              </Text>
              <Text style={styles.company}>
                {company}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.settingTouchable}
              onPress={() => navigation.navigate('Settings', {
                caseIndex,
                name,
                pages,
              })}
            >
              <Image
                style={styles.settingsImg}
                source={settingsImgSrc}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.filler}
        />
        <Text style={styles.blurb}>
          {blurb}
        </Text>
        <View style={styles.metaDataRow}>
          <View style={styles.metaUnit}>
            <Image
              style={styles.metaImg}
              source={bookImgSrc}
            />
            <Text style={styles.metaText}>
              {pages.length} pages
            </Text>
          </View>
          <Image
            style={styles.metaImg}
            source={calendarImgSrc}
          />
          <Text style={styles.metaText}>
            {
              (lastModified)
              ? dateFormat(
                new Date(lastModified),
                'mmmm dS, h:MM TT',
              )
              : 'Not started'
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const propTypes = {
  caseIndex: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  lastModified: PropTypes.string,
  blurb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  thumbnail: PropTypes.number.isRequired,
};

const defaultProps = {
  lastModified: '',
};

CasePanel.propTypes = propTypes;
CasePanel.defaultProps = defaultProps;

export default CasePanel;
