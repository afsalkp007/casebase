import { StyleSheet } from 'react-native';

const styles = {
  container: {
    flexDirection: 'row',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    borderColor: '#d9d9de',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
  },

  image: {
    width: 30,
    height: 30,
    margin: 4,
    borderRadius: 4,
  },

  textMoreRow: {
    flexDirection: 'row',
    flex: 1,
  },

  titleCompanyLogo: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },

  titleAndCompany: {
    flex: 1,
    marginLeft: 5,
    flexDirection: 'column',
  },

  panelBody: {
    margin: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    flex: 1,
  },

  title: {
    fontSize: 16,
    flex: 1,
    color: 'rgba(0,0,0,0.87)',
  },

  company: {
    fontSize: 12,
    flex: 1,
    color: 'rgba(0,0,0,0.87)',
  },

  settingTouchable: {
    padding: 5,
  },

  settingsImg: {
    height: 15,
    width: 15,
  },

  blurb: {
    color: 'rgba(0,0,0,0.54)',
  },

  filler: {
    flex: 1,
  },

  metaDataRow: {
    flexDirection: 'row',
    marginTop: 15,
  },

  metaUnit: {
    flexDirection: 'row',
    marginRight: 10,
  },

  metaImg: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  metaText: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 10,
  },
};

export default StyleSheet.create(styles);
