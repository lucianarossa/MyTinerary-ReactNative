import { StyleSheet} from "react-native";
import { Provider } from "react-redux";
import { configureStore as createStore } from "@reduxjs/toolkit";
import mainReducer from "./redux/reducers/mainReducer";
import { useFonts, PaytoneOne_400Regular } from "@expo-google-fonts/paytone-one";
import { SeaweedScript_400Regular } from "@expo-google-fonts/seaweed-script";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import BottonTabs from "./navigation/BottonTabs"

const reduxStore = createStore({ reducer: mainReducer });

export default function App() {

    
  let [fontsLoaded] = useFonts({
    PaytoneOne_400Regular,
    SeaweedScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={reduxStore}>
        <NavigationContainer>
          <BottonTabs />
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
