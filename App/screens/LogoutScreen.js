import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppButton from "../components/appbutton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import $ from 'jquery';


const data = [
  {
    title: '',
    image: require('../assets/slider1.png'),
    bg: '#59b2ab',
  },
  {
    title: '',
    image: require('../assets/slider2.png'),
    bg: '#febe29',
  },
  {
    title: '',
    image: require('../assets/slider3.png'),
    bg: '#22bcb5',
  },
  {
    title: '',
    image: require('../assets/slider4.png'),
    bg: '#22bcb5',
  },
  {
    title: '',
    image: require('../assets/slider5.png'),
    bg: '#22bcb5',
  }
];

type Item = typeof data[];

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height ;
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
	height: imageHeight,
  },
  image: {
    width: imageWidth,
	height: imageHeight,
    marginVertical: 5,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
buttonbox: {
  marginTop:-35,
  marginRight:100,
  padding:0,
  borderRadius:22,
    backgroundColor: '#64c098',
      width: '100%',
      height: '30%',
	  marginRight:imageWidth*0.45,
   },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class App extends React.Component {
constructor(props){
 super(props);
 this. _Logout = this. _Logout.bind(this);
 this. navigateLogin = this. navigateLogin.bind(this);
// this. navigateNotActive = this. navigateNotActive.bind(this);
 this. _secondFunction = this. _secondFunction.bind(this);
 	console.log(this.props);
 console.log(props);
}	
componentDidMount() {
	this._secondFunction();
  }
navigateLogin(props)
{
	this.props.navigation.navigate('Login');
	return true;
}
	async _Logout(props)
	{
		var data = new FormData();
		var session = "";
		var statusactive = null;
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
			url: 'http://localhost:8000/api/logout',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: await function(data){
				if(data.status == true)
				{
						AsyncStorage.setItem('login_id','');
						AsyncStorage.setItem('user_name','');
						AsyncStorage.setItem('token','');
						AsyncStorage.setItem('logout','1');
				}
				else
				{
					alert("Gagal Logout!");
					
				}
			}
		}).done(await function(data) {
				//alert("ajax done");
				//alert(data.status);
				if(data.status == true)
				{
						AsyncStorage.setItem('login_id','');
						AsyncStorage.setItem('user_name','');
						AsyncStorage.setItem('token','');
						AsyncStorage.setItem('logout','1');
				}
				else
				{
					alert("Gagal Logout!");
					
				}

		}).fail(function() {
			alert( "No Internet Connection!" );
					
		});

	}
	async _secondFunction(props){
	await this._Logout();
  // now wait for firstFunction to finish...
  // do something else
	var x = null;
		console.log(props);
		console.log("test");
		console.log(this.props);
		AsyncStorage.getItem('logout',(err,result) => {
			x =result;
			console.log("emmm");
			console.log(result);
		});
		if(x=="1")
		{
			this.navigateLogin();
			return false;
		}
			this.navigateLogin();
			
		console.log(this.props);
		}
	
  render() {
    return (
	<Text>Logging Out ...</Text>
    );
  }
}