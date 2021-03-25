//import { StatusBar } from "expo-status-bar";
import * as React from 'react';
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
import AccountScreen from "./App/screens/AccountScreen";
import QRCodeScreen from "./App/screens/QRCodeScreen";
import DataScreen from "./App/screens/DataScreen";
import SettingsScreen from "./App/screens/SettingsScreen";
import MainNotActiveScreen from "./App/screens/MainNotActiveScreen";
import LogoutScreen from "./App/screens/LogoutScreen";
import ToolsScreen from "./App/screens/ToolsScreen";
import CoronaScreen from "./App/screens/CoronaScreen";
import AktifkanPaykitazScreen from  "./App/screens/AktifkanPaykitazScreen"
import PilihTypeBusinessScreen from  "./App/screens/PilihTypeBusinessScreen"
import DashboardDataScreen from  "./App/screens/DashboardDataScreen"
import InformasiToko1Screen from  "./App/screens/InformasiToko1Screen"
import InformasiToko2Screen from  "./App/screens/InformasiToko2Screen"
import InformasiToko3Screen from  "./App/screens/InformasiToko3Screen"
import InformasiToko4Screen from  "./App/screens/InformasiToko4Screen"

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';


//use safearea to make sure it's not covered
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cartbar from "./App/components/cartbar";
import { navigationRef } from './RootNavigation';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import Ionicons from 'react-native-vector-icons/Ionicons';



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
        <Stack.Screen name="MainNotActive" component={MainNotActiveScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="QRCode" component={QRCodeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Data" component={DataScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Logout" component={LogoutScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Tools" component={ToolsScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Corona" component={CoronaScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="AktifkanPaykitaz" component={AktifkanPaykitazScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="PilihTypeBusiness" component={PilihTypeBusinessScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="DashboardData" component={DashboardDataScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="InformasiToko1" component={InformasiToko1Screen}  options={{ headerShown: false }} />
        <Stack.Screen name="InformasiToko2" component={InformasiToko2Screen}  options={{ headerShown: false }} />
        <Stack.Screen name="InformasiToko3" component={InformasiToko3Screen}  options={{ headerShown: false }} />
        <Stack.Screen name="InformasiToko4" component={InformasiToko4Screen}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




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
