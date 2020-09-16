import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ThirdScreen({ navigation }) {
  const goBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Screen</Text>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.linkText}>GO BACK</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFDC00",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "hsla(52, 100%, 20%, 1.0)",
  },
  linkText: {
    color: "hsla(52, 100%, 20%, 1.0)",
    marginTop: 50,
  },
});
