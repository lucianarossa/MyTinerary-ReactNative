import { StyleSheet } from "react-native"


const itinerariesStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackImage: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  PrincipalTitle: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 50,
    color: "#F1E0DC",
    padding: 5,
    textShadowColor: "grey",
    textAlign: "center",
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  PrincipalSlogan: {
    fontFamily: "SeaweedScript_400Regular",
    fontSize: 60,
    color: "white",
    padding: 5,
    textAlign: "center",
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  ItinerariesContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  ItinerariesTitle: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 40,
    color: "#7EA6A6",
    letterSpacing: 2,
    textAlign: "center",
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 1,
    marginTop: 30
  },
  Card: {
    margin: 5,
    marginBottom: 30,
    marginTop: 30,
    width: 400,
    height: 670,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 10,
  },
  ItiName: {
    fontFamily: "PaytoneOne_400Regular",
    width:300,
    fontSize: 25,
    textAlign: "center",
    color: "grey",
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: { width: 0.25, height: 0.25 },
    textShadowRadius: 1,
    marginTop: 50
  },
  AuthorContainer: {
    flexDirection: "row",
    width: 400,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20
  },
  AuthorImageContainer:{
    width: 90,
    height: 90,
    borderRadius: 200,
    marginLeft: 40,
    backgroundColor:"#BAC9C7",
    justifyContent:"center",
    alignItems:"center",
    elevation:50
  },
  AuthorImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  AuthorName: {
    fontFamily: "SeaweedScript_400Regular",
    fontSize: 30,
    marginRight: 30
  },
  ItiDescrip: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 15,
    textAlign: "center",
    width: 300,
    marginTop: 20
  },
  PriceContainer: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20
  },
  Itiprice: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 20,
  },
  likes: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 20,
    marginTop: 20
  },
  HashContainer: {
    width:320,
    marginTop: 30,
    marginBottom:20,
    justifyContent: "space-around",
    alignItems:"center"
  },
  Hash: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 15,
    color: "#E993A6",
  }
})

export default itinerariesStyles