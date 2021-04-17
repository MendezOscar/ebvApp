import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../Components/RegisterForm";

export default function Register() {
    const toastRef = useRef();
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#128C73" />
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.imglogo}
        />
        <Text style={styles.textbaner}>Crear cuenta</Text>
        <RegisterForm toastRef={toastRef} />
        <Toast ref={toastRef} position="bottom" opacity={0.9} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#128C73",
    },
    imglogo: {
      width: 150,
      height: 110,
      marginTop: 40,
      alignSelf: "center",
    },
    textbaner: {
      fontWeight: "bold",
      fontSize: 25,
      color: "#fff",
      alignSelf: "center",
    },
  });
  
