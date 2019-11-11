import React from 'react';
import { Text, View, StyleSheet, Image , FlatList } from 'react-native';
  
export default class Homepage extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            data: []
        }
    }

    async componentWillMount(){
        try {
            // const Response = await fetch('http://facebook.github.io/react-native/movies.json');
            // const ResponseJson = await Response.json();
            this.setState({
                // data: ResponseJson.movies
                data: [
                    { name: 'Marseille', temp: 29, main: 'clear' },
                    { name: 'New York', temp: 13, main: 'clear' },
                    { name: 'Pekin', temp: 12, main: 'clear' }
                ]
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.container}
                data = {this.state.data}
                renderItem = {({item}) => <Text>{item.name}</Text>}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });