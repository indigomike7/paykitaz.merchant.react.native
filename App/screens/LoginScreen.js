import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import AppButton from "../components/appbutton";
 
const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/daftar-masuk-bg.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/welcome.png")} />
        <Text style={styles.big}>Hungry?</Text>
      </View>
      <View style={styles.buttonbox}>
        <AppButton title={"Browse food"} onPress={() => navigation.navigate('slider')} />
        <AppButton title={"Search"} color="secondary" />
        
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});