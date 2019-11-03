import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator'

class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Your app is finally working</Text>
      // </View>
      <AppNavigator></AppNavigator>
    );
  }
}

export default  App;


//   
