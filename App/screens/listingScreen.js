import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CardCom from "../components/card";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingScreen(props) {
  return (
    <ScrollView>
      <View style={styles.listpage}>
        <TouchableOpacity onPress={() => navigation.navigate("viewimage")}>
          <CardCom
            title="aaa"
            subtitle="wee"
            price="10.99"
            image={require("../assets/hotdog.jpg")}
          />
          <ListItem
            title="Wendy's"
            subtitle="Fast food"
            image={require("../assets/doge.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("viewimage")}>
          <CardCom
            title="aaa"
            subtitle="wee"
            price="10.99"
            image={require("../assets/hotdog.jpg")}
          />
          <ListItem
            title="Wendy's"
            subtitle="Fast food"
            image={require("../assets/doge.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("viewimage")}>
          <CardCom
            title="aaa"
            subtitle="wee"
            price="10.99"
            image={require("../assets/hotdog.jpg")}
          />
          <ListItem
            title="Wendy's"
            subtitle="Fast food"
            image={require("../assets/doge.jpg")}
          />
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}
export default ListingScreen;
const styles = StyleSheet.create({
  listpage: {
    backgroundColor: colors.primary,
    height: '100%'
  },
});
