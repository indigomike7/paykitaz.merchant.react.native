import React from "react";
import colors from "../config/colors";
import { View, StyleSheet, Text, SafeAreaView, } from "react-native";

function Cartbar({ title, onPress, color = "primary" }) {
  return (
    <SafeAreaView style={styles.topbar}><Text>Asdasdasd</Text></SafeAreaView>
  );
}

export default Cartbar;
const styles = StyleSheet.create({
  topbar: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  
});
