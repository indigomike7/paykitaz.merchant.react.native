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

	function gettipebisnis()
	{
		var data = new FormData();
		AsyncStorage.getItem('login_id',(err,result) => {
			data.append('login_id',result);
			console.log("emmm");
			console.log(result);
		});
//		alert(token);
		AsyncStorage.getItem('user_name',(err,result) => {
			data.append('user_name',result);
			console.log("emmm");
			console.log(result);
		});
		AsyncStorage.getItem('token',(err,result) => {
			data.append('token',result);
			console.log("emmm");
			console.log(result);
		});
	$.ajax({
		url: 'http://localhost:8000/api/gettoko',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			if(data.status == true)
			{
				$("#business_type").val(data.data.mit_business_type);
			}
		}
	});
	return false;
	}


export default class DataScreen extends React.Component
{
constructor(props){
 super(props);
	console.log(this.props);
 console.log(props);
 this.render = this.render.bind(this);
 this. _secondFunction = this. _secondFunction.bind(this);
}
componentDidMount() {
	gettipebisnis();
  }
  async _secondFunction(props){
	  alert($('input[name="business_type"]:checked').val());
		AsyncStorage.setItem('tipe_bisnis',$('input[name="business_type"]:checked').val());
		this.props.navigation.navigate("DashboardData");
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

		<Title>[ Paykitaz Merchant ] - Pilih Tipe Bisnis</Title>

		<Button transparent>
			<Icon size={30} color={'#fff'} name={'navicon'}/>
		</Button>
	</Header>
	<Content style={{width:'100%',}}>				
	 <View style={styles.logoContainer}>
			<Text style={styles.big}>Pilih Tipe Bisnis</Text>
			<Text style={styles.small}><br/></Text>
	</View>
	<View style={{padding:5,}}>
		    <Form
      onSubmit={this._secondFunction}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} name="nameformlogin" id="formpilihtype">
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
            <Field
              name="business_type" id="business_type_fpt"
              component="input"
              type="radio" value="1"
              required
            /> <label>Perseorangan<br/>Dimiliki oleh 1 orang</label>
          </View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
            <Field
              name="business_type" id="business_type_fpt"
              component="input"
              type="radio" value="2"
              required
            /> <label>Kemitraan<br/>Kemitraan Umum, Kemitraan Terbatas</label>
          </View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
            <Field
              name="business_type" id="business_type_fpt"
              component="input"
              type="radio" value="3"
              required
            /> <label>Perusahaan<br/>Perseroan Terbatas</label>
          </View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
            <Field
              name="business_type" id="business_type_fpt"
              component="input"
              type="radio" value="4"
              required
            /> <label>Pemerintahan<br/>Organisasi Pemerintahan atau layanan publik</label>
          </View>
	<View style={{flexDirection: "row",
            alignContent: "space-between", border:1, borderColor:"#e3dddc", borderRadius:10, padding:5,}}>
            <Field
              name="business_type" id="business_type_fpt"
              component="input"
              type="radio" value="5"
              required
            /> <label>Lainnya<br/>Yayasan Koperasi, organisasi nirlaba</label>
          </View>
          <div className="buttons">
            <button type="submit" disabled={submitting} >
              Konfirmasi
            </button>
          </div>
        </form>
      )}
    />
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