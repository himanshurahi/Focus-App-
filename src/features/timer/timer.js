import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import Countdown from "../../components/countdown";

export default function Timer({ focusSubject }) {
  const [isPaused, setIsPaused] = React.useState(true);
  const [progress, setProgress] = React.useState(1);

  const onStart = () => {
    setIsPaused(!isPaused);
  };
  const onProgress = (progress) => {
      console.log(progress)
    setProgress(progress)
  };
  return (
    <View style={styles.container}>
      <Countdown isPaused={isPaused} onProgress={onProgress} />
      <View>
        <Text style={{ color: "white", textAlign: "center" }}>
          Focusing on:
        </Text>
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
          {focusSubject}
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity onPress={onStart} style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {isPaused ? "Start" : "Pause"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Stop</Text>
        </TouchableOpacity>
      </View>
      <ProgressBar
        color="white"
        progress={progress}
        style={{ height: 10, marginTop: 20 }}></ProgressBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "40%",
  },

  button: {
    borderWidth: 1,
    borderColor: "white",
    width: "30%",
    padding: 20,
    borderRadius: 20,
  },
});
