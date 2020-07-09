import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.imagecontainer}>
      <View style={styles.closebutton}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.deletebutton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="red"
        />
      </View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closebutton: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  deletebutton: {
    position: "absolute",
    top: 60,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imagecontainer: {
    backgroundColor: "black",
  },
});

export default ViewImageScreen;
