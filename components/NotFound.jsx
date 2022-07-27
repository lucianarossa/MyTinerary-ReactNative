import React from "react";
import {View, Image, Text } from 'react-native';
import CitiesStyles from "../styles/CitiesStyles"

function NotFound() {
    return (
        <View style={CitiesStyles.NotfoundContainer}>
            <Text  style={CitiesStyles.NotfoundTitle}>we still do not have the city you are looking for, try another one! </Text>
            <Image style={CitiesStyles.Notfound} source={require("../assets/logo2.png")} />
        </View>
    )
}

export default NotFound