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
const api_url = "http://localhost:8000";
AsyncStorage.setItem('api_url',api_url);

export default class App extends React.Component {
constructor(props){
 super(props);
 this. _checkLogin = this. _checkLogin.bind(this);
 this. navigateActive = this. navigateActive.bind(this);
 this. navigateNotActive = this. navigateNotActive.bind(this);
 this. _secondFunction = this. _secondFunction.bind(this);
 	console.log(this.props);
 console.log(props);
}	
componentDidMount() {
	this._secondFunction();
  }
navigateActive(props)
{
	this.props.navigation.navigate('Main');
	return true;
}
navigateLoginRegister(props)
{
	this.props.navigation.navigate('LoginRegister');
	return true;
}
navigateNotActive(props)
{
	this.props.navigation.navigate('MainNotActive');
	return true;
}
	async _checkLogin(props)
	{
		var data = new FormData();
		var session = "";
		var statusactive = null;
		var api_url = "";
		AsyncStorage.getItem('api_url',(err,result) => {
			api_url = result;
		});

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
			url: api_url + '/api/checkloginredirect',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: await function(data){
				if(data.status == true)
				{
					if(data.active ==true)
					{
						AsyncStorage.setItem('statuslogin','1')
					}
					else
					{
						AsyncStorage.setItem('statuslogin','0')
						
					}
				}
			}
		}).done(await function(data) {
				//alert("ajax done");
				//alert(data.status);
					if(data.active ==true)
					{
						AsyncStorage.setItem('statuslogin','1')
					}
					else
					{
						AsyncStorage.setItem('statuslogin','0')
						
					}

		}).fail(function() {
			alert( "No Internet Connection!" );
					
		});;

	}
	async _secondFunction(props){
	await this._checkLogin();
  // now wait for firstFunction to finish...
  // do something else
	var x = null;
	var  y = null;
		console.log(props);
		console.log("test");
		console.log(this.props);
		AsyncStorage.getItem('logout',(err,result) => {
			y =result;
			console.log("emmm");
			console.log(result);
		});
		AsyncStorage.getItem('statuslogin',(err,result) => {
			x =result;
			console.log("emmm");
			console.log(result);
		});
		if(y=="1")
		{
			this.navigateLoginRegister();
			return false;
		}
		if(x=="1")
		{
			this.navigateActive();
			return false;
		}
		if(x=="0")
		{
			this.navigateNotActive();
			return false;
		}
			
		console.log(this.props);
		}
	
  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />        
		<i class="fas fa-arrow-right"></i>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonbox}>
        <AppButton title={"Get Started"} color="#64c098" onPress={() => this.props.navigation.navigate('LoginRegister')} />
      </View>
    );
  };

_onDone =  ({})  => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
	this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderItem={this._renderItem}
          data={data}
		onDone = {this._onDone}
        />
      </View>
    );
  }
}