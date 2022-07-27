import React from "react";
import {View, Image, Text } from 'react-native';
import CitiesStyles from "../styles/CitiesStyles"

function NotFoundIti() {
    return (
        <View style={CitiesStyles.NotfoundContainer}>
            <Text  style={CitiesStyles.NotfoundTitle}>there are no itineraries for this city yet try another one!</Text>
            <Image style={CitiesStyles.Notfound} source={require("../assets/logo2.png")} />
        </View>
    )
}

export default NotFoundIti