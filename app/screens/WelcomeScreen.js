import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  ViewComponent,
} from "react-native";
import LoginButton from "../components/LoginButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need</Text>
      </View>

      <View style={styles.logincontainer}>
        <LoginButton title="Login" color="primary" />

        <LoginButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logincontainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocontainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});

export default WelcomeScreen;
