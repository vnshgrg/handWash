import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const goToNext = () => {
    navigation.navigate("two");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <TouchableOpacity onPress={goToNext}>
        <Text style={styles.linkText}>GO TO NEXT SCREEN</Text>
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
    backgroundColor: "#001f3f",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  linkText: {
    color: "hsla(210, 100%, 75%, 1.0)",
    marginTop: 50,
  },
});
