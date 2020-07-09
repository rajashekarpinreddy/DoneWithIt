import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherprops }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color="green"
        style={styles.icon}
      />
      <TextInput style={styles.TextInput} {...otherprops} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 20,
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  TextInput: {
    fontSize: 18,
    fontFamily: "Avenir",
  },
});

export default AppTextInput;
