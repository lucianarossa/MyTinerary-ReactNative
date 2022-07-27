import { StyleSheet } from "react-native"


const CitiesStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: { 
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  PrincipalTitle: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 45,
    color: "#F1E0DC",
    padding: 5,
    textShadowColor: "grey",
    textAlign: "center",
    textShadowColor: 'white',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  PrincipalSlogan: {
    fontFamily: "SeaweedScript_400Regular",
    fontSize: 30,
    color: "white",
    padding: 5,
    textAlign: "center",
  },
  Subtitle: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 30,
    color: "#7ea6a6",
    letterSpacing:2,
    textAlign:"center",
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 1,
    marginTop:30
  },
  Input:{
    height:50,
    width:200,
    backgroundColor:"#f1e0dc",
    padding:15,
    borderRadius:20,
    marginTop:20,
    marginBottom:20,
    elevation:20,
    fontFamily:"PaytoneOne_400Regular",
    color:"black"
  },
  Card: {
    margin: 16,
    width: 250,
    height: 350,
    borderRadius: 30,
    alignItems:"center",
    elevation:50
  },
  imageCard:{
    width:250,
    height:350,
    position: "absolute",
    borderRadius: 30,
  },
  CitiesTitle: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 35,
    textAlign: "center",
    color: "white",
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 1,
  },
  CitiesSubt: {
    fontFamily: "SeaweedScript_400Regular",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginTop:30,
    textShadowColor: 'black',
    textShadowOffset: { width: 0.25, height: 0.25 },
    textShadowRadius: 1,
    marginTop:40
  },
  NotfoundContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Notfound: {
    width:250,
    height:280, 
  },
  NotfoundTitle: {
    marginTop:20,
    width:280,
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 20,
    textAlign: "center",
    color: "black",
    textShadowColor: 'grey',
    textShadowOffset: { width: 0.25, height: 0.25 },
    textShadowRadius: 1,
  },
  
})

export default CitiesStyles