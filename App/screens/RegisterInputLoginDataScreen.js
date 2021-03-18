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

	async _submitform(props)
	{
		var data = new FormData();
		var session_id = $("#session_idx").val();
			if(session_id == "")
			{
				AsyncStorage.getItem('session_id',(err,result) => {
						$("#session_idx").val(result);
						//alert(result);
					console.log(this.session_idx);
					console.log("emmm");
					console.log(result);
				});
			}
		var data = new FormData($("#nameform3")[0]);
		var working = false;
//				data.append('session_id',this.session_idx);

		await $.ajax({
			url: 'http://localhost:8000/api/daftar3',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: function(data){

				if(data.status == false)
				{
					//alert("data.status = false");
					$('#error_warn').html(data.error);
					$("#statushidden").val("false");
					AsyncStorage.setItem('login',"false")
				}
				else
				{
					//alert("data.status = trues");
					$("#statushidden").val("true");
					AsyncStorage.setItem('login',"true")
				}
				console.log("Session di Form 1 : " + data.session_id_reg);
				console.log('emmm');
				console.log(props);
				console.log('emmm');
				console.log(this.props);

			}
		}).done(
				function(data){
				AsyncStorage.getItem('login',(err,result) => {
					//$("#statushidden").val(result);
				});
				working = true;
			}
		);
					var x = $("#statushidden").val();
					//alert(x);
					if(x == "not ok" || x == "false")
					{
						//alert("not to login");
						return false;
					}
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
		  <div>Masukkan Data untuk anda Login. Masukkan Nomor HP, Email, Username dan Password Anda<br/><br/></div>
          <div id="error_warn">
          </div>
          <div>
		  <input type="hidden" id="statushidden" name="statushidden" value="not ok"/>
		  <input type="hidden" id="session_idx" name="session_idx" value=""/>
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
