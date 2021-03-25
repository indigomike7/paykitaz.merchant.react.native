import React from 'react'
import { render } from 'react-dom'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
//import {  } from 'react-native-elements';
import AppButton from "../components/appbutton";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'
import $ from 'jquery';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import {Container, Footer, Header, Button, Content, Title} from 'native-base';

import {Dimensions} from 'react-native';

import Styles from './MainStyles'
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'


const dimensions = Dimensions.get('window');
const screenHeight = dimensions.height ;
const screenWidth = dimensions.width; 



export default class MainScreen extends React.Component
{
constructor(props){
 super(props);
	console.log(this.props);
 console.log(props);
 this.render = this.render.bind(this);
}
	render(props){
		console.log("oyy");
		console.log(props);
		console.log("oyy");
		console.log(this.props);
		return(
    <ImageBackground
      style={styles.background}
      source={require("../assets/daftar-sedikit-lagi.png")}
    >
<Container>
	<Header style={{ backgroundColor:'#8ae6bd',}}>
		<Button transparent>
			<Icon size={30} color={'#fff'} name={'arrow-left'} />
		</Button>

		<Title>[Paykitaz Merchant] - Home</Title>

		<Button transparent>
			<Icon size={30} color={'#fff'} name={'navicon'}/>
		</Button>
	</Header>
	<Content>				
	 <View style={styles.logoContainer}>
			<Text style={styles.big}></Text>
			<Text style={styles.small}><br/></Text>
		  </View>
	<View >
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
	<Image
        style={styles.tinyLogo}
        source={require('../assets/dashboard-icon-aktifkan.png')}
      />
	<Text>Tingkatkan penjualan dengan terima pesanan paykitaz merchant.</Text>
	<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Aktifkan Sekarang &gt;</Text>
	</Button>
	</View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
	<Image
        style={styles.tinyLogo}
        source={require('../assets/dashboard-icon-qr.png')}
      />
	<Text>Mulai terima pembayaran dengan code QR Paykitaz di toko.</Text>
	<Button onPress={() => this.props.navigation.navigate("QRCode")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Aktifkan Sekarang &gt;</Text>
	</Button>
	</View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
	<Image
        style={styles.tinyLogo}
        source={require('../assets/dashboard-icon-corona.png')}
      />
	<Text>Bersama melawan Covid-19, Upaya kamu untuk melindungi diri.</Text>
	<Button onPress={() => this.props.navigation.navigate("Corona")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Pelajari Sekarang &gt;</Text>
	</Button>
	</View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
	<Image
        style={styles.tinyLogo}
        source={require('../assets/dashboard-icon-alat.png')}
      />
	<Text>Lihat alat-alat baru yang bisa membantu anda, menjalankan bisnis anda.</Text>
	<Button onPress={() => this.props.navigation.navigate("Tools")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Pelajari Sekarang &gt;</Text>
	</Button>
	</View>
	</View>
</Content>
<Footer>
<View style={styles.footer}>
<Button onPress={() => this.props.navigation.navigate("Main")} style={{ backgroundColor: "#8ae6bd", padding:8, }}>
<Icon name='home'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>Home</Text>
</Button>
<Button onPress={() => this.props.navigation.navigate("Data")} style={{ backgroundColor: "#fa8405", padding:8, }}>
<Icon name='money'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>Data</Text>
</Button>
<Button onPress={() => this.props.navigation.navigate("QRCode")} style={{ backgroundColor: "#fa8405", padding:8, }}>
<Icon name='qrcode'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>QR Code</Text>
</Button>
<Button onPress={() => this.props.navigation.navigate("Account")} style={{ backgroundColor: "#fa8405", padding:8, }}>
<Icon name='cog'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>Settings</Text>
</Button>
<Button onPress={() => this.props.navigation.navigate("Logout")} style={{ backgroundColor: "#fa8405", padding:8, }}>
<Icon name='arrow-right'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>Logout</Text>
</Button>
</View>
		</Footer>
            </Container>     
		</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
buttonmenu: {
    width: ((screenWidth/5) -1),
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 1,
	fontSize: 5,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
footer: {
	alignSelf:'flex-end',
	flexDirection: "row",
    alignContent: "space-between",
	width: "100%",
	alignSelf:'left',
	justifyContent: 'space-between',
    backgroundColor: '#fff',
	border:1,
	borderColor:'blue',
    height: 80,
	position:'absolute',
	bottom:0,
	left:0,
	elevation:8,
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
  }
  ,
  tinyLogo: {
    width: 50,
    height: 50,
  },
});