import { View, ScrollView } from 'react-native';
import CitiesStyles from '../styles/CitiesStyles';
import CoverCities from "../components/CoverCities";
import FilterCities from "../components/FilterCities"
import { useDispatch } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import { useEffect } from 'react';
import React from 'react';
import { useScrollToTop } from '@react-navigation/native';


export default function CitiesScreen({navigation}) {
    const ref = React.useRef(null);
    useScrollToTop(ref);


    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(citiesActions.getCities())
        //eslint-disable-next-line
    },[])
   
    return (
            <ScrollView ref={ref}>
                <View style={CitiesStyles.container}>
                    <CoverCities />
                    <FilterCities navigation={navigation}/>
                </View>
            </ScrollView>
    );
}
