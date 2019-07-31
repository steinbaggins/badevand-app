import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListPage from "./containers/List";
import MapPage from './containers/Map';
import InfoPage from './containers/Info';
import SettingsPage from './containers/Settings';

const TabNavigator = createBottomTabNavigator({
  ListPage,
  MapPage,
  InfoPage,
  SettingsPage,
});

export default createAppContainer(TabNavigator);