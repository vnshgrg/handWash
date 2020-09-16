import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SecondScreen({ navigation }) {
  const goToNext = () => {
    navigation.navigate("three");
  };
  const goBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>
      <TouchableOpacity onPress={goToNext}>
        <Text style={styles.linkText}>GO TO NEXT SCREEN</Text>
      </TouchableOpacity>

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
    backgroundColor: "#FF4136",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  linkText: {
    color: "#fff",
    marginTop: 50,
  },
});
