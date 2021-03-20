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

const dimensions = Dimensions.get('window');
const screenHeight = dimensions.height ;
const screenWidth = dimensions.width; 



export default class QRCodeScreen extends React.Component
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
			<Icon size={30} color={'#fff'} name={'ios-arrow-left'} />
		</Button>

		<Title>[ Paykitaz Merchant ] - Settings</Title>

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
	<Text>What is Lorem Ipsum?
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

	Why do we use it?
	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


	Where does it come from?
	Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
	</Text>
	</View>
</Content>
<Footer>
<View style={styles.footer}>
<Button onPress={() => this.props.navigation.navigate("Account")} style={{ backgroundColor: "#fa8405", padding:8, }}>
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
<Button onPress={() => this.props.navigation.navigate("Settings")} style={{ backgroundColor: "#8ae6bd", padding:8, }}>
<Icon name='cog'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>Settings</Text>
</Button>
<Button onPress={() => this.props.navigation.navigate("Account")} style={{ backgroundColor: "#fa8405", padding:8, }}>
<Icon name='user'  style={{ color: "#fff" }}/>
            <Text  style={{ color: "#fff" }}>Account</Text>
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
});