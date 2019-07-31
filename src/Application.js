import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListPage from "./containers/List";
import MapPage from './containers/Map';
import InfoPage from './containers/Info';
import SettingsPage from './containers/Settings';
import tabBarIcon from './components/TabBarIcon';

const TabNavigator = createBottomTabNavigator({
  ListPage: {
    screen: ListPage,
    navigationOptions: {
      tabBarIcon: tabBarIcon('menu'),
    },
  },
  MapPage: {
    screen: MapPage,
    navigationOptions: {
      tabBarIcon: tabBarIcon('map'),
    },
  },
  InfoPage: {
    screen: InfoPage,
    navigationOptions: {
      tabBarIcon: tabBarIcon('info'),
    },
  },
  SettingsPage: {
    screen: SettingsPage,
    navigationOptions: {
      tabBarIcon: tabBarIcon('settings'),
    },
  },
},{
  initialRouteName: 'MapPage',
  tabBarOptions: {
    activeTintColor: '#0098db',
    inactiveTintColor: '#000000',
    showLabel: false,
  },
  defaultNavigationOptions: {
    tabBarLabel: ""
  }
});

export default createAppContainer(TabNavigator);