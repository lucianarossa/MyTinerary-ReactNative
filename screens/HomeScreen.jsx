import { View, ScrollView } from 'react-native';
import Hero from "../components/Hero"
import Carrousel from '../components/Carrousel';
import HomeStyles from '../styles/HomeStyles';
import React from 'react';
import { useScrollToTop } from '@react-navigation/native';


export default function HomeScreen({navigation}) {
    const ref = React.useRef(null);
    useScrollToTop(ref);
 
    return (
        <>
            <ScrollView ref={ref}>
                <View style={HomeStyles.container}>
                    <Hero navigation={navigation}/>
                    <Carrousel />
                </View>
            </ScrollView>
        </>

    );
}


