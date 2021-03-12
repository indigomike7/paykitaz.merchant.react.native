import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import AppButton from "../components/appbutton";
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 import { BottomNavigation } from 'react-native-paper';
 
 
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height ;
const imageWidth = dimensions.width; 

//  				AsyncStorage.setItem('session_id', "");
 
const LoginRegisterScreen = ({navigation}) => {
  return (

    <ImageBackground
      style={styles.background}
      source={require("../assets/daftar-masuk-bg.png")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.big}>Home</Text>
        <Text style={styles.small}>Semua alat untuk mengelola dan mengembangkan bisnis anda</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginRegisterScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
buttonbox: {
	marginRight:40,
    marginLeft:40,
	marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
	width:240,
    paddingBottom:10,
    backgroundColor:'#64c098',
    borderRadius:22,
    borderWidth: 1,
    borderColor: '#fff'
},
buttonbox2: {
	marginRight:40,
    marginLeft:40,
	marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
	width:240,
    paddingBottom:10,
    backgroundColor:'blue',
    borderRadius:22,
    borderWidth: 1,
    borderColor: '#fff'
},
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 250,
  },
  big: {
    fontSize: imageWidth/imageHeight*80,
    justifyContent: "center",
    color: "black",
    alignItems: "center",
	marginTop:210,
	padding:imageWidth/imageHeight*40,
  },
  small: {
    fontSize: imageWidth/imageHeight*40,
    justifyContent: "center",
    color: "black",
    alignItems: "center",
	padding:imageWidth/imageHeight*40,
  }
  ,  logoContainer: {
    marginTop: (imageHeight/(imageHeight+740))*300,
    alignItems: "center",
  },
  masuk:
  {
  }
  ,
});


const MyComponent = () => {
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export {MyComponent};