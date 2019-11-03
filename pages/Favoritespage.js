import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Favoritespage extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                 <Text>Favoris</Text>
                 {/* <View>
                <button title="Ajouter"></button>
                 </View> */}
            </View>
        )
    }

}

export default Favoritespage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});