import React, { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { View, StyleSheet, Alert } from "react-native";

// 1 user will set a wifi network as home
// 1.1 current wifi network screen ma "ADD AS HOME" vanne option bata home wifi network save garne
// 2 when user connects to home wifi show alert
// 2.1 check if home wifi is same as current wifi connection

const App = () => {
  const [oldBssid, setOldBssid] = useState(null);
  const [currentBssid, setCurrentBssid] = useState(null);

  useEffect(() => {
    // get storage value await AsyncStorage.getItem('@bssid');
    // set that to a state variable setBssid(...);

    const unsub = NetInfo.addEventListener((state) => {
      setCurrentBssid(state.details.bssid);
    });

    return () => {
      unsub();
    };
  }, []);

  //   if (bssid === currentBssid) {
  //     Alert.alert("You're on same network");
  //   }

  return <View style={styles.box1}></View>;
};

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: "red",
  },
  box2: {
    top: 120,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  box3: {
    top: 120,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default App;
