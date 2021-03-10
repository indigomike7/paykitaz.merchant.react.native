import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  Card,
} from "react-native";
import colors from '../config/colors'
function CardCom({title, subtitle, image, price}) {
  return (
    <View style={styles.card}>
     <Image style={styles.cardImage} source={image} />
     <Text style={styles.title}>{title}</Text>
     <Text style={styles.subtitle}>{subtitle}</Text> 
     <Text style={styles.price}>${price}</Text>
     <Button title="Add to Cart" />
    </View>
  );
}
export default CardCom;
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    
    padding: 15,
    borderRadius: 25,
    margin: 10,
  },
  cardImage: {
   width: '100%',
   height: '35%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  subtitle: {
    paddingTop: 5,
    paddingHorizontal: 5,
    fontSize: 18,
    textAlign: "center"
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    paddingHorizontal: 0,
    paddingTop: 15,
   fontSize: 18,
   
   textAlign: "center"
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
   fontSize: 28,
   textAlign: "center"
  },
});