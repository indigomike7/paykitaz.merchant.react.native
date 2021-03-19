import React from 'react'
import { render } from 'react-dom'
import Styles from './LoginStyles'
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import AppButton from "../components/appbutton";

import AsyncStorage from '@react-native-async-storage/async-storage';

import $ from 'jquery';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationActions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class MainScreen extends React.Component
{
constructor(props){
 super(props);
	console.log(this.props);
 console.log(props);
}
	render(){
		return(
			<View>
			<Text>Main</Text>
			<footerScr/>
			</View>
		);
	}
}




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: 'Setting Page' }}/>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}
function footerScr()
{
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


//import FooterScreen from './FooterScreen';
