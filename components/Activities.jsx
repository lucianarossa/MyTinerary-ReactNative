import React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ScrollView, View, Image, Text, ImageBackground } from "react-native";
import ActivitiesStyles from "../styles/ActivitiesStyles";
import activitiesActions from "../redux/actions/activitiesActions";
import NotFoundAct from "./NotFoundAct";



export default function Activities({ route }) {
    const { id } = route.params

    const dispatch = useDispatch()
    const [activities, setActivities] = useState([])


    useEffect(() => {
        const activitiesIti = async () => {
            const res = await dispatch(activitiesActions.getActivitiesByItinerary(id));
            setActivities(res);
        }
        activitiesIti()

        // eslint-disable-next-line
    }, [id])
    // console.log("ACTIVITIES", activities)

    return (
        <>
            <View style={ActivitiesStyles.MainContainer}>
                    {activities?.length > 0 ? (
                        <>
                            <Text style={ActivitiesStyles.PrincipalTitle}>ACTIVITIES TO ENJOY!</Text>
                            <ScrollView horizontal={true}>

                                {activities?.map((activity, index) =>


                                    <View horizontal={true} style={ActivitiesStyles.CardContainer} key={index}>
                                        <View style={ActivitiesStyles.textArea}>
                                            <Text style={ActivitiesStyles.textView}>{activity?.name}</Text>
                                        </View>
                                        <Image source={{ uri: activity?.image }} style={ActivitiesStyles.CardImg}></Image>
                                    </View>

                                )}
                            </ScrollView>
                        </>
                    ) : (<NotFoundAct/>)
                    
                
                
                
                }

                {/* </ImageBackground> */}
            </View>
        </>


    );
}
