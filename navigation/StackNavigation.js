import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitiesScreen from '../screens/CitiesScreen';
import ItinerariesScreen from '../screens/ItinerariesScreen';
import Activities from "../components/Activities"

const Stack = createNativeStackNavigator();
export default function CitiesStackNavigation() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="CitiesScreen" component={CitiesScreen}
                options={{ headerShown: false, }} />
            <Stack.Screen name="Itineraries" component={ItinerariesScreen} 
            options={{ headerShown: false, }}/>
            <Stack.Screen name="Activities" component={Activities} 
            options={{ headerShown: false, }}/>
        </Stack.Navigator>

    )
}

