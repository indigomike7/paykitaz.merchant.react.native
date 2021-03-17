import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import AppButton from "../components/appbutton";
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Styles'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 


 
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height ;
const imageWidth = dimensions.width; 

//  				AsyncStorage.setItem('session_id', "");
 
const LoginRegisterScreen = ({navigation}) => {
  return (
  <View style={styles.container}>
    <ImageBackground
      style={styles.background}
      source={require("../assets/daftar-masuk-bg.png")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.big}>Selamat Datang di Paykitaz Merchant</Text>
        <Text style={styles.small}>Semua alat untuk mengelola dan mengembangkan bisnis anda</Text>
      </View>
      <View style={styles.buttonbox}>
        <AppButton  title={"Daftar"} size="sm" color="#64c098"  onPress={() => navigation.navigate('Register1')} />
        
      </View>
      <View style={styles.buttonbox2}>
        <AppButton  title={"Masuk"} size="sm"  color="blue" onPress={() => navigation.navigate('Login')}/>
        
      </View>
    </ImageBackground>
  </View>
  );
};

export default LoginRegisterScreen;
const styles = StyleSheet.create({
container: {
    flex: 1,
    position: 'relative',
	height:'200%',
	backgroundColor:'#d8f7e9',
  },
  background: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
	height:null,
	width:null,
  },
buttonbox: {
	marginRight:40,
    marginLeft:40,
	marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
	width:240,
    paddingBottom:10,
    backgroundColor:'#64c098',
    borderRadius:22,
    borderWidth: 1,
    borderColor: '#fff'
},
buttonbox2: {
	marginRight:40,
    marginLeft:40,
	marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
	width:240,
    paddingBottom:10,
    backgroundColor:'blue',
    borderRadius:22,
    borderWidth: 1,
    borderColor: '#fff'
},
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 250,
  },
  big: {
    fontSize: RFPercentage(6.5),
    justifyContent: "center",
    color: "black",
    alignItems: "center",
	marginTop:180,
	padding:imageWidth/imageHeight*40,
  },
  small: {
    fontSize: RFPercentage(4.5),
    justifyContent: "center",
    color: "black",
    alignItems: "center",
	padding:imageWidth/imageHeight*40,
  }
  ,  logoContainer: {
    marginTop: (imageHeight/(imageHeight+740))*300,
    alignItems: "center",
  },
  masuk:
  {
  }
  ,
});