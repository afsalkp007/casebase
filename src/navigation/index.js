import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import CaseSet from '../containers/CaseSet';
import Settings from '../containers/Settings';

export default StackNavigator({
  Home: { screen: Home },
  CaseSet: { screen: CaseSet },
  Settings: { screen: Settings },
});

