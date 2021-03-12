import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
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
	session_idx="";
constructor(props){
 super(props);
 this. _submitform = this. _submitform.bind(this);
	console.log(this.props);
 console.log(props);
}

	_submitform(props)
	{
		var data = new FormData();
		var data = new FormData($("#nameform3")[0]);
		AsyncStorage.getItem('session_id',(err,result) => {
			this.session_idx = result;
			console.log(this.session_idx);
			console.log("emmm");
			console.log(result);
		});
				data.append('session_id',this.session_idx);

		$.ajax({
			url: 'http://localhost/paykitaz-merchant-api/api/daftar3',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: function(data){
				var session_id_reg = data.session_id_reg;
				//alert(session_id_reg);
				//Keychain.setGenericPassword('session', data.session_id_reg);
				AsyncStorage.setItem('session_id', data.session_id_reg);
				
							let token = AsyncStorage.getItem('session_id');
				console.log(token);
				
						if(token){
						token.then(function(result)
							{
								console.log("Session di Form 1 : " + result);
								console.log("ehemm");
							}
						);
						
					}

				console.log("Session di Form 1 : " + data.session_id_reg);
//				alert(data.session_id_reg);
				//navigation.navigate('Register2');
				/*const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
				*/

				//NavigationActions.navigate("Register2");
				//this.props.navigation.dispatch(navigateAction);
				//navigate('Slider', { userName: 'Lucy' });
//				this.setState({ component: <Register2Screen /> })
				console.log('emmm');
				console.log(props);
				console.log('emmm');
				console.log(this.props);
//				this.props.navigation.navigate("Register2");
//				alert("oyy");

			}
		});
				console.log('emmm');
				console.log(props);
				console.log('emmm');
				console.log(this.props);
				this.props.navigation.navigate("Login");
	}


componentDidMount() {
//submit();
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
      source={require("../assets/register-input-login-bg.png")}
    >
    <h1>Daftar Paykitaz Merchant</h1>
    <Form
      onSubmit={this._submitform}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} name="nameform3" id="nameform3">
          <div>
            <label>Nomor Handphone</label><br/>
            <Field
              name="phone_number"
              component="input"
              type="number"
              placeholder="Phone Number"
              pattern="[0-9].+"
              patternMismatch="Capitalize your name!"
              required
              minLength={4}
              tooShort="Masukkan Nomor Handphone"
            />
          </div>
          <div>
            <label>Username</label><br/>
            <Field
              name="user_name"
              component="input"
              type="text"
              placeholder="Username"
              required
              minLength={4}
              tooShort="Masukkan Alias atau username anda"
            />
          </div>
          <div>
            <label>Email</label><br/>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              required
              minLength={4}
              tooShort="Masukkan email dengan format email"
            />
          </div>
          <div>
            <label>Password</label><br/>
            <Field
              name="login_password"
              component="input"
              type="password"
              placeholder=""
              required
              minLength={8}
              tooShort="Password minimal 8 karakter"
			/>
          </div>
          <div>
            <label>Konfirmasi Password</label><br/>
            <Field
              name="confirm_password"
              component="input"
              type="password"
              placeholder=""
              required
              minLength={8}
              tooShort="Password minimal 8 karakter"
			/>
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting} >
              Submit
            </button>
            <button type="button" onClick={reset} disabled={submitting}>
              Reset
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
