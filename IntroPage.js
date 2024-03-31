import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, } from 'react-native';

export default function IntroPage({ navigation }) {
    const navigateToUser = () => {
        navigation.navigate('User');
    };

    return (
        <TouchableOpacity onPress={navigateToUser} style={styles.touchableContainer}>
            <View style={styles.container}>
                <Image source={require('./images/Vector.png')} style={{ width: 200, height: 200, resizeMode: "contain" }} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        marginTop:35,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});
