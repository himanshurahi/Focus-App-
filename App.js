import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/focus";
import Timer from "./src/features/timer/timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("focus Subject");

  const addFocus = (text) => {
    setFocusSubject(text);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}></Timer>
      ) : (
        <Focus addFocus={addFocus}></Focus>
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#252250",
  },
});
