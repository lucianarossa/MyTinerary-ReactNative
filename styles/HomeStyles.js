import { StyleSheet } from "react-native"


const HomeStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    height: 80,
    width: 80,
  },
  LogoTabs:{
    height: 45,
    width: 45,
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
    fontSize: 50,
    color: "#F1E0DC",
    padding: 5,
    textShadowColor: "grey",
    textAlign: "center",
    textShadowColor: 'white',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  PrincipalSubt: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 21,
    color: "#95ACA8",
    padding: 5,
    textShadowColor: "white",
    letterSpacing: 2,
    textAlign: "center",
    textShadowColor: 'white',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  PrincipalSlogan: {
    fontFamily: "SeaweedScript_400Regular",
    fontSize: 18,
    color: "white",
    padding: 5,
    textAlign: "center"
  },
  welcome: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  WelcomeTitle: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 21,
    color: "#95ACA8",
    padding: 5,
    textShadowColor: "white",
    letterSpacing: 2,
    textAlign: "center",
    margin: 30,
    textShadowColor: 'black',
    textShadowOffset: { width: 0.5, height: 0.5 },
  },
  WelcomeSubt: {
    fontFamily: "SeaweedScript_400Regular",
    fontSize: 25,
    color: "black",
    padding: 5,
    textAlign: "center",
    marginBottom: 20
  },
  CallImage: {
    height: 200,
    width: 200
  },
  button: {
    height:60,
    width:200,
    textAlign:"center",
    alignItems:"center",
    marginBottom:20,
    backgroundColor: "#EA839B",
    borderRadius: 15,
    padding: 15,
    elevation:10
  },
  TextButton: {
    color: "black",
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 15,
  },
  carrousel: {
    width: "100%",
    height: 500,
    backgroundColor: "#BAC9C7",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 20,
    elevation:50
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  cityName: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  itiTitle: {
    fontFamily: "PaytoneOne_400Regular",
    textAlign: "center",
    fontSize: 25,
    color: "white",
    paddingTop: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  buttonTab: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize:15,
  },
});

export default HomeStyles