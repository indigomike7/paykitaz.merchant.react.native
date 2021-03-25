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



export default class DataScreen extends React.Component
{
constructor(props){
 super(props);
	console.log(this.props);
 console.log(props);
 this.render = this.render.bind(this);
 this._secondFunction = this._secondFunction.bind(this);
}
componentDidMount() {
	AsyncStorage.getItem('tipe_bisnis',(err,result) => {
		var html = "";
		if(result=="1")
		{
			html = "<h5>Tipe Bisnis</h5>Perseorangan";
		}
		if(result=="2")
		{
			html = "<h5>Tipe Bisnis</h5>Kemitraan";
		}
		if(result=="3")
		{
			html = "<h5>Tipe Bisnis</h5>Perusahaan";
		}
		if(result=="4")
		{
			html = "<h5>Tipe Bisnis</h5>Pemerintahan";
		}
		if(result=="5")
		{
			html = "<h5>Tipe Bisnis</h5>Lainnya";
		}
		$("#business_type_div").html(html);
	});

  }	 _secondFunction(props){
		this.props.navigation.navigate("PilihTypeBusiness");
		console.log(this.props);
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
<Container style={{width:'100%',}}>
	<Header style={{ backgroundColor:'#8ae6bd',}}>
		<Button transparent>
			<Icon size={30} color={'#fff'} name={'ios-arrow-left'} />
		</Button>

		<Title>[ Paykitaz Merchant ] - Aktifkan Paykitaz</Title>

		<Button transparent>
			<Icon size={30} color={'#fff'} name={'navicon'}/>
		</Button>
	</Header>
	<Content style={{width:'100%',}}>	
<View>	
	<div id="business_type_div">
	</div>
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Informasi Toko.<br/>Isi informasi umum tentang toko</Text>
		<Button onPress={() => this.props.navigation.navigate("InformasiToko1")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
		
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Profil Publik.<br/>Masukkan Data Pribadi anda</Text>
		<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
		
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Rekening Bank.<br/>Daftarkan rekening bank untuk terima pendapatan</Text>
		<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Dokumen Legal.<br/>Upload dokumen untuk validasi bisnis anda</Text>
		<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Detail Restoran.<br/>Isi informasi untuk ditampilkan di aplikasi Paykitaz</Text>
		<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Foto menu dan makanan.<br/>Upload daftar menu dan foto makanan</Text>
		<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
		<View style={{flexDirection: "row",
				alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
		<Image
			style={styles.tinyLogo2}
			source={require('../assets/siapkan-dokumen.png')}
		  />
		<Text>Jam buka.<br/>Atur jam buka dan jam tutup restoran</Text>
		<Button onPress={() => this.props.navigation.navigate("AktifkanPaykitaz")} style={{ backgroundColor: "#ffff", padding:8, }}>
            <Text  style={{ color: "#0314a6" }}>Selengkapnya &gt;</Text>
		</Button>
		</View>
	<br/><br/><br/>
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
	logoContainer:{
		padding:5,
	},
	big:{
		fontSize:20,
	},
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
    width: 25,
    height: 25,
  },
  tinyLogo2: {
    width: 50,
    height: 50,
  },
});