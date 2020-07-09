import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function LoginButton({ title, color, onPress }) {
  return (
    <TouchableOpacity style={styles(color).loginbutton}>
      <Text style={styles(color).text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = (color) =>
  StyleSheet.create({
    loginbutton: {
      backgroundColor: color === "primary" ? colors.primary : colors.secondary,
      width: "100%",
      borderRadius: 20,
      marginVertical: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: colors.white,
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });
export default LoginButton;
