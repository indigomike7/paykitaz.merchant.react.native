//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Card,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import colors from "./App/config/colors";
/*
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";  use this to support orientations */



import WelcomeScreen from "./App/screens/welcomeScreen";
import SliderScreen from "./App/screens/SliderScreen";
import LoginRegisterScreen from "./App/screens/LoginRegisterScreen";
import LoginScreen from "./App/screens/LoginScreen";
import Register1Screen from "./App/screens/Register1Screen";
import Register2Screen from "./App/screens/Register2Screen";
import RegisterVerifikasiScreen from "./App/screens/RegisterVerifikasiScreen";
import RegisterInputLoginDataScreen from "./App/screens/RegisterInputLoginDataScreen";
import ViewImageScreen from "./App/screens/viewimage";
import CardCom from "./App/components/card";
import ListingScreen from "./App/screens/listingScreen";
import MainScreen from "./App/screens/MainScreen";



//use safearea to make sure it's not covered
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cartbar from "./App/components/cartbar";
import { navigationRef } from './RootNavigation';


const App = () => {
  const Stack = createStackNavigator();
  //shake the phone for dev menu
  /* const {
    landscape,
  } = useDeviceOrientation(); /* change with orientation  <Text style={{color: landscape ? 'green' : 'black',}}>Meme dictionary</Text> */
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Slider" component={SliderScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="LoginRegister" component={LoginRegisterScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Register1" component={Register1Screen}  options={{ headerShown: false }} />
        <Stack.Screen name="Register2" component={Register2Screen}  options={{ headerShown: false }} />
        <Stack.Screen name="RegisterVerifikasi" component={RegisterVerifikasiScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="RegisterInputLoginData" component={RegisterInputLoginDataScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Viewimage" component={ViewImageScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
	alignItems:"center",
  },
  big: {
    fontSize: 48,
  },
});

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


{
  /*local image <Image styles={styles.image} source={require("./assets/download.png")} />*/
}
{
  /* alerts 
  <Button title="click meh" onPress={() => Alert.alert('Do you', 'yes', [
    {text: 'yes'},
    {text: 'nah', onPress:HandlePress}
  ])}  />*/
}

{
  /* web inmages <Image
  style={styles.image}
  source={{
    width: 200,
    height: 300,
    uri:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F000%2F640%2F866%2Fe59.png&f=1&nofb=1",
  }}
/>
*/
}
