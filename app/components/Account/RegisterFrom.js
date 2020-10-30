import React from "react";
import { StyleSheet, View } from "react-native";
import { Value } from "react-native-reanimated";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  return (
    <View style={styles.formC}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.InputForm}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.InputForm}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.InputForm}
        password={true}
        secureTextEntry={true}
      />      
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}

      />
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
