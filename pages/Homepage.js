import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default class Homepage extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Homepage</Text>
            </View>
        )
    }
}

