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

import AsyncStorage from '@react-native-async-storage/async-storage';

import $ from 'jquery';

$(document).ready(
	function()
	{
		$('#province').on('change', function() {
			submit2(this.value);
		});
		$('#kabupaten').on('change', function() {
			submit3(this.value);
		});
		$('#kecamatan').on('change', function() {
			submit4(this.value);
		});

	}

);

	function submit()
	{
	$.ajax({
		url: 'http://localhost:8000/api/province',
		data: "test=test",
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			var i;
			if(data.datax) {
			for(i=0;i<data.datax.length;i++)
			{
				//alert(data.datax[i].bt_name);
						$("#province").append(new Option(data.datax[i].name, data.datax[i].id));

			}
			}
		}
	});
	return false;
	}
	function submit2(id)
	{
		var fd = new FormData();
		fd.append("province_id",id);
	$.ajax({
		url: 'http://localhost:8000/api/kabupaten',
		data: fd,
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			var i;
			$("#kabupaten").empty();
			$("#kabupaten").append(new Option("-- Select --", "0"));
			if(data.datax) {
			for(i=0;i<data.datax.length;i++)
			{
				//alert(data.datax[i].bt_name);
				$("#kabupaten").append(new Option(data.datax[i].name, data.datax[i].id));

			}
			}
//			$("#div_isi").html("$('#province').on('change', function() { submit2(this.value); }); 	$('#kabupaten').on('change', function() { submit3(this.value); 	}); $('#kecamatan').on('change', function() { submit4(this.value); });");
			

		}
	});
	return false;
	}
	function submit3(id)
	{
		var fd = new FormData();
		fd.append("regency_id",id);
	$.ajax({
		url: 'http://localhost:8000/api/kecamatan',
		data: fd,
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			var i;
			$("#kecamatan").empty();
			$("#kecamatan").append(new Option("-- Select --", "0"));
			if(data.datax) {
			for(i=0;i<data.datax.length;i++)
			{
				//alert(data.datax[i].bt_name);
						$("#kecamatan").append(new Option(data.datax[i].name, data.datax[i].id));

			}
			}
			///$("#div_isi").html("$('#province').on('change', function() { submit2(this.value); }); 	$('#kabupaten').on('change', function() { submit3(this.value); 	}); $('#kecamatan').on('change', function() { submit4(this.value); });");
			
					
		}
	});
	return false;
	}
	function submit4(id)
	{
		var fd = new FormData();
		fd.append("district_id",id);
	$.ajax({
		url: 'http://localhost:8000/api/kelurahan',
		data: fd,
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			var i;
			$("#merchant_kelurahan").empty();
			$("#merchant_kelurahan").append(new Option("-- Select --", "0"));
			if(data.datax) {
			for(i=0;i<data.datax.length;i++)
			{
				//alert(data.datax[i].bt_name);
						$("#merchant_kelurahan").append(new Option(data.datax[i].name, data.datax[i].id));

			}
			}
			//$("#div_isi").html("$('#province').on('change', function() { submit2(this.value); }); 	$('#kabupaten').on('change', function() { submit3(this.value); 	}); $('#kecamatan').on('change', function() { submit4(this.value); });");
		}
	});
	return false;
	}
	function submitform()
	{
		var data = new FormData();
		var data = new FormData($("#nameform")[0]);
		//data.append('store_name', $("input[name='store_name']").val());
		//jQuery.each(jQuery('#filez')[0].files, function(i, file) {
		//    data.append('file-'+i, file);
		//});
		$.ajax({
			url: 'http://localhost:8000/api/daftar2',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: function(data){
				//session_id_reg = data.session_id_reg;
				//alert(session_id_reg);
				Keychain.setGenericPassword('session', data.session_id_reg);
				navigation.navigate('Register2');
				
			}
		});
		return false;
	}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300);
  submitform();
}
export default class InformasiToko3Screen extends React.Component {
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
		var data = new FormData($("#nameform2")[0]);
		var session = "";
		AsyncStorage.getItem('session_id',(err,result) => {
			this.session_idx = result;
			console.log(this.session_idx);
			console.log("emmm");
			console.log(result);
		});
//		alert(token);
		data.append('session_id',this.session_idx);
		$.ajax({
			url: 'http://localhost:8000/api/daftar2',
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
				
			}
		});
				console.log('emmm');
				console.log(props);
				console.log('emmm');
				console.log(this.props);
				this.props.navigation.navigate("RegisterVerifikasi");

		return false;
	}

componentDidMount() {
submit();
$(document).ready(
	function()
	{
		$('#province').on('change', function() {
			submit2(this.value);
		});
		$('#kabupaten').on('change', function() {
			submit3(this.value);
		});
		$('#kecamatan').on('change', function() {
			submit4(this.value);
		});

	}

);  
/*
let token = AsyncStorage.getItem('session_id');
    console.log(token);
	
	        if(token){
			token.then(function(result)
				{
					$("#session_id").val(result);
					console.log("Session di Form 2 : " + result);
					console.log("ehemm");
				}
			);
			
        }
*/
}
render(){
return (
  <Styles>
    <ImageBackground
      source={require("../assets/register_2_bg.png")}
    >
    <h1>Daftar Paykitaz Merchant</h1>
    <Form
      onSubmit={this._submitform}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} name="nameform" id="nameform2">
          <div>
            <label>Alamat</label><br/>
			<Field name="merchant_address" component="input" type="text" placeholder="Alamat" required/>
          </div>
          <div>
            <label>Provinsi</label><br/>
            <Field
              name="province" id="province"
              component="select"
	  onchange="{submit2(this.value)}"
              required
              >
              <option value="0">Select</option>
            </Field>
          </div>
          <div>
            <label>Kabupaten</label><br/>
            <Field
              name="kabupaten" id="kabupaten"
              component="select"
	  onchange="{submit3(this.value)}"
              required
              >
              <option value="0">Select</option>
            </Field>
          </div>
          <div>
            <label>Kota/Kecamatan</label><br/>
            <Field
              name="kecamatan" id="kecamatan"
              component="select"
			  onchange="{submit4(this.value)}"
              required
              >
              <option value="0">Select</option>
            </Field>
          </div>
          <div>
            <label>Kelurahan</label><br/>
            <Field
              name="merchant_kelurahan" id="merchant_kelurahan"
              component="select"
              required
              >
              <option value="0">Select</option>
            </Field>
          </div>
          <div>
            <label>Kode Pos</label><br/>
            <Field
              name="zip_code"
              component="input"
              type="text"
              placeholder="Kode Pos"
              required
              minLength={4}
              tooShort="Mohon Masukkan Kode Pos"
            />
			<input type="hidden" name="session_id" id="session_id"/>
          </div>
           <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="button" onClick={reset} disabled={submitting}>
              Reset
            </button>
          </div>
		  <div id="div_isi"></div>
        </form>
      )}
    />
    </ImageBackground>
  </Styles>
)

}
}
