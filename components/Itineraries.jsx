import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ItinerariesStyles from '../styles/ItinerariesStyles';
import { useScrollToTop } from '@react-navigation/native';


export default function Itineraries({ itinerary, navigation }) {
    const ref = React.useRef(null);
    useScrollToTop(ref);


 
    return (
        <>      
        <TouchableOpacity onPress={() => navigation.navigate('Activities', {id: itinerary?._id})} ref={ref}>
            <View style={ItinerariesStyles.Card}>
            <Text style={ItinerariesStyles.ItiName}>{itinerary?.name}</Text>
            <View style={ItinerariesStyles.AuthorContainer}>
                <View style={ItinerariesStyles.AuthorImageContainer}>
                    <Image source={{ uri: itinerary?.authorimage }} style={ItinerariesStyles.AuthorImage}></Image>
                </View>
                <Text style={ItinerariesStyles.AuthorName}>{itinerary?.author}</Text>
            </View>
            <Text style={ItinerariesStyles.ItiDescrip}>{itinerary?.description}</Text>
            <View style={ItinerariesStyles.PriceContainer}>
                <Text style={ItinerariesStyles.Itiprice}>USD {itinerary?.price}</Text>
                <Text style={ItinerariesStyles.Itiprice}>{itinerary?.duration}⏱️</Text>
            </View>
            <Text style={ItinerariesStyles.likes}>👍 likes!</Text>
            <View style={ItinerariesStyles.HashContainer}>
                {itinerary?.hashtags.map((hash, index) =>
                    <Text style={ItinerariesStyles.Hash} key={index}>{hash}</Text>)}
            </View>
            </View>
        </TouchableOpacity>
        </>

    )
}