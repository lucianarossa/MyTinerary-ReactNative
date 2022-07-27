import React from 'react';
import CitiesStyles from '../styles/CitiesStyles';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';




export default function Cities({ citiesFilt, navigation }) {
    const ref = React.useRef(null);
    useScrollToTop(ref);

// console.log(citiesFilt)
    return (
        <>

            {citiesFilt?.map((city, index) =>
                <TouchableOpacity style={CitiesStyles.Card} key={index} onPress={() => navigation.navigate('Itineraries', {id:city._id})} ref={ref}>
                    <Image source={{ uri: city.image }} key={index} style={CitiesStyles.imageCard}></Image>
                    <Text style={CitiesStyles.CitiesSubt}>let's travel to</Text>
                    <Text style={CitiesStyles.CitiesTitle}>{city.name}</Text>
                </TouchableOpacity>



            )}
        </>
    )
}