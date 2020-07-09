import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 175,
  },
  title: {
    marginBottom: 8,
    paddingLeft: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default Card;
