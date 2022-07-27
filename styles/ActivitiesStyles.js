import { StyleSheet } from "react-native"


const ActivitiesStyles = StyleSheet.create({

    CardContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
        elevation: 80,
        height: 400,
        width:400,
        marginTop:50
    },
    MainContainer: {
        flex: 1,
        backgroundColor:"#EDDAD4"
    },
    BackImage: {
        flex: 1,
        justifyContent: "center"
    },
    PrincipalTitle: {
        width: "100%",
        fontFamily: "PaytoneOne_400Regular",
        fontSize: 35,
        textAlign: "center",
        marginTop: 90,
        color: "white",
        textShadowColor: "grey",
        textShadowOffset: { width: 1, height: 0.5 },
        textShadowRadius: 1,
    },
    textArea: {
        width: 300,
        margin: 50,
        justifyContent:"center",
        alignItems:"center",
    },
    textView: {
        color: "white",
        fontSize: 25,
        fontFamily: "PaytoneOne_400Regular",
        textAlign: "center",
        width: "100%",
        height: 400,
        borderRadius: 30,
        textShadowColor: 'pink',
        textShadowOffset: { width: 0.5, height: 0.5 },
        zIndex: 20,
        padding: 20,
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
        backgroundColor:"rgba(0, 0, 0, 0.283)"
    },
    CardImg: {
        width: 300,
        height: 400,
        alignSelf: "center",
        borderRadius: 30,
        position: "absolute"
    },

})

export default ActivitiesStyles