import { Text, View, ScrollView, Image} from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import CitiesStyles from '../styles/CitiesStyles';
import HomeStyles from "../styles/HomeStyles"
import { useWindowDimensions } from 'react-native';
import Cities from "./Cities"
const videoBack = { uri: "https://i.imgur.com/vnSOy27.mp4" }




export default function CoverCities() {

    const { height, width } = useWindowDimensions();


    return (
        <>
            <ScrollView>
                <View style={{
                    width: width,
                    height: height,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Video
                        style={CitiesStyles.video}
                        source={videoBack}
                        rate={1}
                        shouldPlay={true}
                        isLooping={true}
                        muted={true}
                        resizeMode="cover"
                    />
                    <Image
                        style={HomeStyles.Logo}
                        source={require("../assets/logo2.png")}
                    />
                    <Text style={CitiesStyles.PrincipalTitle}>Landing Places</Text>
                    <Text style={CitiesStyles.PrincipalSlogan}>awaiting your arraival!</Text>
                </View>
                <View style={CitiesStyles.CitiesContainer}>
                    <Cities/>  
                </View>
        
            </ScrollView>
        </>
    );

}

