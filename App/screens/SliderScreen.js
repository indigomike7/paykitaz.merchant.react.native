import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppButton from "../components/appbutton";

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