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

import $ from 'jquery';

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
				session_id_reg = data.session_id_reg;
				alert(session_id_reg);
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
export default class App extends React.Component {

componentDidMount() {
submit();
  }
render(){
return (
  <Styles>
    <ImageBackground
      source={require("../assets/register_1_bg.png")}
    >
    <h1>Daftar Paykitaz Merchant</h1>
    <Form
      onSubmit={onSubmit}
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
            <Field
              name="filez"
              component="input"
              type="file"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
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
