import React from 'react';
import { Text, View } from 'react-native';
class SettingsPage extends React.Component {

    // deleteFavoritesPress() {
    //     AsyncStorage.removeItem('cities').then(() => alert('Favoris Supprimés'));
    // }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Paramètres</Text>
                {/* <button title = "Supprimer les favoris" onPress={() => this.onDeleteFavoritesPress()}></button> */}
            </View>
        );
    }
}

export default SettingsPage;