import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RegisterFrom from "../../components/Account/RegisterFrom";

export default function Register() {
  return (
    <View>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.ViewForm}>
        <RegisterFrom></RegisterFrom>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },

  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
