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

	function submit()
	{
		var api_url = "";
		AsyncStorage.getItem('api_url',(err,result) => {
			api_url = result;
		});

	$.ajax({
		url: api_url + '/api/businesstype',
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
constructor(props){
 super(props);
 this. _submitform = this. _submitform.bind(this);
	console.log(this.props);
 console.log(props);
}

	_submitform(props)
	{
		var data = new FormData();
		var data = new FormData($("#nameform")[0]);
		var statuz = false;
		var api_url = "";
		AsyncStorage.getItem('api_url',(err,result) => {
			api_url = result;
		});
		//data.append('store_name', $("input[name='store_name']").val());
		//jQuery.each(jQuery('#filez')[0].files, function(i, file) {
		//    data.append('file-'+i, file);
		//});
		$.ajax({
			url: api_url + '/api/daftar',
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
				this.props.navigation.navigate("Register2");
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
	<div class="register_1_bg">
    <h1>Daftar Paykitaz Merchant</h1>
    <Form
      onSubmit={this._submitform}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} name="nameform" id="nameform">
          <div>
            <label>Nama Merchant</label><br/>
            <Field
              name="store_name"
              component="input"
              type="text"
              placeholder="Business Name"
              pattern="[A-Z].+"
              patternMismatch="Capitalize your name!"
              required
              minLength={4}
              tooShort="You need a longer name"
            />
          </div>
          <div>
            <label>Bidang Bisnis</label><br/>
            <Field
              name="business_type" id="business_type"
              component="select"
              required
              >
              <option value="0">Select</option>
            </Field>
          </div>
          <div>
            <label>Jam Buka</label><br/>
            <Field
              name="store_open"
              component="input"
              type="text"
              required
              minLength={4}
              tooShort="You need a time"
            />
          </div>
          <div>
            <label>Jam Tutup</label><br/>
            <Field
              name="store_close"
              component="input"
              type="text"
              required
              minLength={4}
              tooShort="You need a time"
            />
          </div>
          <div>
            <label>Tipe Merchant</label><br/>
            <Field
              name="merchant_type"
              component="input"
              type="radio" value="1"
            /> Online
            <Field
              name="merchant_type"
              component="input"
              type="radio" value="2"
            /> Offline
          </div>
          <div>
            <label>Upload Gambar</label><br/>
			<label style={{border:1, borderColor: "green", backgroundColor:"green", padding:5, borderRadius:15, color:"white",}}>
            <Field
              name="filez"
              component="input"
              type="file"
              required style={{display:"none",}}
            />
			+  Upload Image
			</label>
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
    </div>
  </Styles>
)

}
}
