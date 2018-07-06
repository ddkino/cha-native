import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import React from 'react';

import Navigation from './Navigation'

class App extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}

export default App;

