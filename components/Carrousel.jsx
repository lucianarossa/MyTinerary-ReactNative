import React from "react";
import { View, Text} from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import citiesActions from "../redux/actions/citiesActions"
import HomeStyles from "../styles/HomeStyles";
import {useRef, useState} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {TouchableOpacity, Dimensions} from 'react-native';


const Carrousel = props => {
 
    const dispatch = useDispatch()
    const {width: screenWidth} = Dimensions.get('window');

    useEffect(() => {
        dispatch(citiesActions.getCities())
    },[])

   

    const cities = useSelector(store=> store.citiesReducer.cities)
    // console.log("CITIESSSSSS", cities)

    
        const [city, setCity] = useState([]);
        const carouselRef = useRef(null);
      
        const goForward = () => {
          carouselRef.current.snapToNext();
        };
      
        useEffect(() => {
          setCity(cities);
        }, []);
      
        const renderItem = ({item, index}, parallaxProps) => {
          return (
            <>
            <View style={{
                width: screenWidth - 60,
                height: screenWidth - 60,
                marginTop:30
              }}>
              <ParallaxImage
                source={{uri: item.image}}
                containerStyle={HomeStyles.imageContainer}
                style={HomeStyles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
              />
              <Text style={HomeStyles.cityName} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={HomeStyles.cityName} numberOfLines={2}>
                {item.country}
              </Text>
            </View>
            </>
          );
        };
      

    return(
       <View style={HomeStyles.carrousel}>
            <Text style={HomeStyles.itiTitle} numberOfLines={2}>Popular MyTineraries</Text>
        <TouchableOpacity onPress={goForward}></TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={cities}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
       </View>

    )
}

export default Carrousel