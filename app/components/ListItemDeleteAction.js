import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={colors.white}
          style={styles.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  delete: {
    backgroundColor: colors.danger,
    width: 75,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    marginLeft: 20,
  },
});
export default ListItemDeleteAction;
