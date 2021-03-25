import React from 'react'
import { render } from 'react-dom'
import Styles from './InformasiTokoStyles'
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
		url: 'http://localhost:8000/api/mbti',
		data: "test=test",
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
		success: function(data){
			//alert(data.datax[0].bt_name);
			var i;
			$("#mit_business_type_info").empty();
			$("#mit_business_type_info").append(new Option("-- Select --", "0"));
			if(data.datax) {
			for(i=0;i<data.datax.length;i++)
			{
				//alert(data.datax[i].bt_name);
						$("#mit_business_type_info").append(new Option(data.datax[i].mbti_name, data.datax[i].mbti_id));

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
export default class InformasiToko1Screen extends React.Component {
	session_idx="";
constructor(props){
 super(props);
 this. _submitform = this. _submitform.bind(this);
 this. _secondFunction = this. _secondFunction.bind(this);
	console.log(this.props);
 console.log(props);
}
	async _submitform(props)
	{
		var data = new FormData();
		var data = new FormData($("#infotoko1")[0]);
		var session = "";
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
		AsyncStorage.getItem('tipe_bisnis',(err,result) => {
			data.append('mit_business_type',result);
			console.log("emmm");
			console.log(result);
		});
		$.ajax({
			url: 'http://localhost:8000/api/informasitoko1',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			method: 'POST',
			type: 'POST', // For jQuery < 1.9
			success: await function(data){
				if(data.status == true)
				{
					//alert("data.status = trues");
					AsyncStorage.setItem('nextinfo2','1');
				}
				else
				{
					//alert("data.status = false");
					$('#error_warn').html(data.error);
					AsyncStorage.setItem('nextinfo2','0');
				}
				
			}
		}).done(
				await function(data){
				if(data.status == true)
				{
					//alert("data.status = trues");
					AsyncStorage.setItem('nextinfo2','1');
				}
				else
				{
					//alert("data.status = false");
					$('#error_warn').html(data.error);
					AsyncStorage.setItem('nextinfo2','0');
				}
		}).fail(function() {
			//alert( "error" );
					$("#error_warn").html("Gagal Register. Ada masalah dengan Koneksi Anda");
					AsyncStorage.setItem('nextinfo2','0')
					
		});

	}
	async  _secondFunction(props){
		await this._submitform();
		console.log(props);
		console.log("test");
		console.log(this.props);
		var x = "";
		AsyncStorage.getItem('nextinfo2',(err,result) => {
			x =result;
			console.log("emmm");
			console.log(result);
		});
		alert(x);
		if(x=="0" || x==false || x==undefined)
		{
			//alert("xxx");
			return false;
		}
		this.props.navigation.navigate("InformasiToko2");
		console.log(this.props);
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
    <h1>Daftar Paykitaz Merchant</h1>
    <Form
      onSubmit={this._secondFunction}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} name="infotoko1" id="infotoko1">
          <div>
            <label>Nama Toko</label><br/>
			<input type="hidden" name="statushiddenz1" id="statushiddenz1" value="not ok"/>
			<Field name="mit_store_name" component="input" type="text" placeholder="Alamat" required/>
			* Gunakan nama yang tertera di papan toko
          </div>
          <div>
            <label>Tipe Bisnis</label><br/>
            <Field
              name="mit_business_type_info" id="mit_business_type_info"
              component="select"
	  onchange="{submit2(this.value)}"
              required
              >
              <option value="0">Select</option>
            </Field>
          </div>
          <div>
            <label>Penjualan (Rp./Tahun)</label><br/>Pilih Skala Bisnis Tahun ini<br/>
            <Field
              name="mit_omzet_annually" id="mit_omzet_annually"
              component="input" type="radio" value="1"
              required
			/> &lt; 300 Juta<br/>
            <Field
              name="mit_omzet_annually" id="mit_omzet_annually"
              component="input" type="radio" value="1"
              required
			/> 300 Juta - 2,5 Milliar<br/>
            <Field
              name="mit_omzet_annually" id="mit_omzet_annually"
              component="input" type="radio" value="1"
              required
			/> 2,5 - 50 Milliar<br/>
            <Field
              name="mit_omzet_annually" id="mit_omzet_annually"
              component="input" type="radio" value="1"
              required
			/> &gt; 50 Milliar<br/>
          </div>
          <div>
            <label>Penjualan (Rp./Bulan)</label><br/>Pilih Pendapatan Kotor per bulan<br/>
            <Field
              name="mit_omzet_monthly" id="mit_omzet_monthly"
              component="input" type="radio" value="1"
              required
			/> &lt; 3 Juta<br/>
            <Field
              name="mit_omzet_monthly" id="mit_omzet_monthly"
              component="input" type="radio" value="1"
              required
			/> 3 Juta - 100 Juta<br/>
            <Field
              name="mit_omzet_monthly" id="mit_omzet_monthly"
              component="input" type="radio" value="1"
              required
			/> 100 Juta - 2,5 Milliar<br/>
            <Field
              name="mit_omzet_monthly" id="mit_omzet_monthly"
              component="input" type="radio" value="1"
              required
			/> &gt; 2,5 Milliar<br/>
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
  </Styles>
)

}
}
