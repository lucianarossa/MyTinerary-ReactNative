import { Text, TextInput } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import { useEffect, useState } from "react"
import Cities from "../components/Cities"
import CitiesStyles from "../styles/CitiesStyles"
import NotFound from "../components/NotFound"


function FilterCities({navigation}){
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    

    useEffect(() => {

        dispatch(citiesActions.filterCities(inputValue))
        // eslint-disable-next-line
    }, [inputValue])

    const cityFilter = useSelector(store => store.citiesReducer.filter)
 

    return(
        <>
            <Text style={CitiesStyles.Subtitle}>Let's explore the world!</Text>
            <TextInput style={CitiesStyles.Input}
            onChangeText={setInputValue}
            placeholder="Search by city..."
            value={inputValue}
            />    
        {cityFilter?.length > 0 ? (<Cities navigation={navigation} citiesFilt={cityFilter}/>) : (<NotFound />)}
        </>

    )



}

export default FilterCities