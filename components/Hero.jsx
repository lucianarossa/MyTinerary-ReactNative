import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import HomeStyles from '../styles/HomeStyles';
import { useWindowDimensions } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
const videoBack = { uri: "https://i.imgur.com/DqdJrf0.mp4" }




export default function Hero({navigation}) {
    const ref = React.useRef(null);
    useScrollToTop(ref);

    const { height, width } = useWindowDimensions();

    return (
        <>
            <ScrollView ref={ref}>
                <View style={{
                    width: width,
                    height: height,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',           
                }}>
                    <Video
                        style={HomeStyles.video}
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
                    <Text style={HomeStyles.PrincipalTitle}>MyTinerary</Text>
                    <Text style={HomeStyles.PrincipalSubt}>find your perfect trip!</Text>
                    <Text style={HomeStyles.PrincipalSlogan}>design by insiders who know and love their cities!</Text>
                </View>
                <View style={HomeStyles.welcome}>
                    <Image
                        style={HomeStyles.CallImage}
                        source={require("../assets/callimage.png")}
                    />
                    <Text style={HomeStyles.WelcomeTitle}>if you want to discover the most amazing places around the world</Text>
                    <Text style={HomeStyles.WelcomeSubt}>you are in the right place!</Text>
                    <TouchableOpacity
                        style={HomeStyles.button}
                        onPress={() => navigation.navigate("Cities")}
                        ref={ref}
                    >
                        <Text style={HomeStyles.TextButton}>JOIN THE JOURNEY</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    ); 

}

