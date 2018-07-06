import {createStackNavigator} from 'react-navigation';
import React from 'react';

import HomeScreen from './containers/Home'

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});