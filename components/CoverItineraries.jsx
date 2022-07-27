import { Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import ItinerariesStyles from '../styles/ItinerariesStyles';
import { useWindowDimensions } from 'react-native';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import citiesActions from '../redux/actions/citiesActions';
import itinerariesActions from "../redux/actions/itinerariesActions"
import Itineraries from '../components/Itineraries';
import NotFoundIti from './NoFoundIti';




export default function CoverItineraries({id, navigation}) {
//   console.log("IDDDDDD", id)

    const dispatch = useDispatch()
    const { height, width } = useWindowDimensions();
    useEffect(() => {

        dispatch(citiesActions.getOneCity(id))
        dispatch(itinerariesActions.getItinerariesByCity(id))
        // eslint-disable-next-line
    }, [id])


    const city = useSelector(store => store.citiesReducer.getOneCity)
    const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesByCity)
    // console.log("DATAAA",itineraries)


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
                    <Image
                        style={ItinerariesStyles.BackImage}
                        source={{ uri: city?.image }}
                    />
                    <Text style={ItinerariesStyles.PrincipalSlogan}>{city?.phrase}</Text>
                    <Text style={ItinerariesStyles.PrincipalTitle}>{city?.name}</Text>
                </View>
                <Text style={ItinerariesStyles.ItinerariesTitle}>Itineraries</Text>
                <View style={ItinerariesStyles.ItinerariesContainer}>            
                    {itineraries?.length > 0 ? (itineraries?.map((itinerary,index) =>
                            <Itineraries itinerary={itinerary} key={index} navigation={navigation}/>) ) : (<NotFoundIti />)}
                </View>

            </ScrollView>
        </>
    );

}

