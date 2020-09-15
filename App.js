import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

// internet connection info line part
// internet conneciton info persist -> asyncStorage
// state = memory -> app close vayo vane data lose huncha
// asyncStorage = Disk -> app close vaye pani next time disk bata available huncha
// server -> API -> API call...

export default function App() {
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");

  useEffect(() => {
    const readName = async () => {
      try {
        // read from disk
        const storedName = await AsyncStorage.getItem("@stored_name");
        // show on console
        setName(storedName);
      } catch (e) {
        console.log(e);
      }
    };

    readName();
  }, []);

  const updateName = async () => {
    try {
      // state update
      setName(tempName);
      setTempName("");

      // save to disk
      await AsyncStorage.setItem("@stored_name", tempName);
    } catch (e) {
      //console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome {name}</Text>
      <View>
        <TextInput
          style={styles.nameInput}
          onChangeText={(text) => setTempName(text)}
          value={tempName}
        />
      </View>
      <TouchableOpacity onPress={updateName}>
        <Text>Set Name</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nameInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: 300,
  },
});
