import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'List',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>List</Text>
      </View>
    );
  }
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

