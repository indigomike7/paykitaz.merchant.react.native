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
//const pushAction = StackActions.push('Register2', { user: 'Wojtek' });
import Register2Screen from './Register2Screen'
import * as RootNavigation from './../../RootNavigation.js';

	function submit()
	{
	$.ajax({
		url: 'http://localhost/paykitaz-merchant-api/api/paket/businesstype',
		data: "test=test",
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			var i;
			for(i=0;i<data.datax.length;i++)
			{
				//alert(data.datax[i].bt_name);
						$("#business_type").append(new Option(data.datax[i].bt_name, data.datax[i].bt_id));

			}
		}
	});
	return false;
	}
	
	
	function submitform()
	{
		var data = new FormData();
		var data = new FormData($("#nameform")[0]);
		var statuz = false;
		//data.append('store_name', $("input[name='store_name']").val());
		//jQuery.each(jQuery('#filez')[0].files, function(i, file) {
		//    data.append('file-'+i, file);
		//});
		$.ajax({
			url: 'http://localhost/paykitaz-merchant-api/api/daftar',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: function(data){
				//session_id_reg = data.session_id_reg;
				//alert(session_id_reg);
				//Keychain.setGenericPassword('session', data.session_id_reg);
				AsyncStorage.setItem('session_id', data.session_id_reg);
				alert(data.session_id_reg);
				//navigation.navigate('Register2');
				/*const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
				*/

				//NavigationActions.navigate("Register2");
				//this.props.navigation.dispatch(navigateAction);
				navigate('SliderScreen', { userName: 'Lucy' });
//				alert("oyy");
			}
		});
	}


	export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function onSubmit(){
			submitform();
  }


export default class Register1Screen extends React.Component {
	status_login = false;
constructor(props){
 super(props);
 this. _submitform = this. _submitform.bind(this);
	console.log(this.props);
 console.log(props);
}

	_submitform(props)
	{
		var data = new FormData();
		var data = new FormData($("#nameformlogin")[0]);
		$.ajax({
			url: 'http://localhost:8000/api/login',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: function(data){
				alert(data);
				console.log(data);
				if(data.status==true)
				{
				AsyncStorage.setItem('login_id', data.login_id);
				AsyncStorage.setItem('user_name', data.user_name);
				AsyncStorage.setItem('token', data.token);
				this.status_login = true;
				}
				else
				{
					$("#error_warn").html("Gagal Login! No Handphone dan / atau Password Salah.");
				}
				alert(this.status_login);
			}
		}).fail(function() {
			//alert( "error" );
					$("#error_warn").html("Gagal Login! <br>No Handphone dan / atau Password Salah.");
		});
		if(this.status_login)
		{
				this.props.navigation.navigate("Main");
		}
	}


componentDidMount() {
submit();
//navigate('Slider', { userName: 'Lucy' });
//navigate('SliderScreen', { userName: 'Lucy' });
//this.changeState.bind({ component: <Register2Screen /> });
//this.setState({ component: <Register2Screen /> });
//NavigationActions.navigate('Register2Scren');
//NavigationActions.navigate('SliderScreen');
//NavigationActions.navigate('Slider');
//this.props.navigation.navigate("SliderScreen");
//this.props.navigation.navigate("Slider");
//this.props.navigation.navigate("Register2Screen");
//alert("Test");
  }
render(){
return (
  <Styles>
    <ImageBackground
      source={require("../assets/daftar-masuk-bg.png")}
    >
    <h1>Login Merchant Paykitaz</h1>
    <Form
      onSubmit={this._submitform}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} name="nameformlogin" id="nameformlogin">
          <div id="error_warn">
          </div>
          <div>
            <label>Phone Number</label><br/>
            <Field
              name="phone_number"
              component="input"
              type="number"
              placeholder="Phone Number"
              required
              minLength={8}
              tooShort="Masukkan Nomor Handphone"
            />
          </div>
          <div>
            <label>Sandi / Password</label><br/>
            <Field
              name="login_password"
              component="input"
              type="password"
              required
              minLength={8}
              tooShort="Masukkan Sandi atau Password, Minimum 8 Karakter"
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting} >
              Login
            </button>
          </div>
        </form>
      )}
    />
    </ImageBackground>
  </Styles>
)

}
}
