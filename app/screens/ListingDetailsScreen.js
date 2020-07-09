import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View style={styles.imagecontainer}>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <Text style={styles.title}> Red jacket for sale!</Text>
      <Text style={styles.price}> $100</Text>
      <View style={styles.listitemcontainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Rajashekar Reddy"
          subTitle="6 Listings"
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    paddingTop: 20,
    borderRadius: 15,
  },
  imagecontainer: {
    paddingTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
    fontSize: 20,
  },
  listitemcontainer: {
    marginVertical: 15,
  },
});
export default ListingDetailsScreen;
