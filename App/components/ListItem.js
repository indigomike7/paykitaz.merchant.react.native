import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ListItem({title, subtitle, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
export default ListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subContainer: {
      color: colors.white,
      padding: 15,
    },
    title: {
        color: colors.white,
paddingBottom: 5,
marginLeft: -15,
      fontSize: 18
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    marginLeft: -15
  }
});
