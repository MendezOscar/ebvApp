import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoutesAuth from "./src/Navigation/RoutesAuth";
import RoutesNotAuth from "./src/Navigation/RoutesNotAuth";

export default function App() {
  return <RoutesNotAuth />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
