import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import React from 'react';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ch@ Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

