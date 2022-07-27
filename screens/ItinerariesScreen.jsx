import { View, ScrollView } from 'react-native';
import ItinerariesStyles from '../styles/ItinerariesStyles';
import React from 'react';
import CoverItineraries from "../components/CoverItineraries"
import { useScrollToTop } from '@react-navigation/native';


export default function ItinerariesScreen({navigation, route}) {
    const { id } = route.params
    const ref = React.useRef(null);
    useScrollToTop(ref);




    return (
        <>
            <ScrollView ref={ref} >
                <View style={ItinerariesStyles.container}>
                    <CoverItineraries navigation={navigation} id={id}/>
                </View>
            </ScrollView>
        </>

    );
}
