import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailscontainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.white,
  },
  detailscontainer: {
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  subtitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: "500",
    marginTop: 8,
  },
});
export default ListItem;
