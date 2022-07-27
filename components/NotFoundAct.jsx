import React from "react";
import {View, Image, Text } from 'react-native';
import CitiesStyles from "../styles/CitiesStyles"

function NotFoundAct() {
    return (
        <View style={CitiesStyles.NotfoundContainer}>
            <Text  style={CitiesStyles.NotfoundTitle}>we still do not have activities for this itinerary, try another one! </Text>
            <Image style={CitiesStyles.Notfound} source={require("../assets/logo2.png")} />
        </View>
    )
}

export default NotFoundAct