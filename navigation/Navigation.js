import { createStackNavigator } from 'react-navigation';
import React from 'react';

import HomeScreen from '../containers/Home/index';
import ListScreen from "../containers/List/index";
import LoginScreen from '../containers/Login/index';


export default createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    List: {
      screen: ListScreen
    },
    Login: {
      screen: LoginScreen
    },
  },
  {
    // init view
    initialRouteName: 'Login',
  });
