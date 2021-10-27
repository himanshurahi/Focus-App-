import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import Countdown from "../../components/countdown";
import Timing from "./timing";
export default function Timer({ focusSubject, onTimerEnd, clearSubject }) {
  const [isPaused, setIsPaused] = React.useState(true);
  const [progress, setProgress] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0.1);

  const onStart = () => {
    setIsPaused(!isPaused);
  };
  const onProgress = (progress) => {
    setProgress(progress);
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsPaused(true);
  };
  return (
    <View style={styles.container}>
      <Countdown
        minutes={minutes}
        isPaused={isPaused}
        onProgress={onProgress}
        onTimerEnd={onTimerEnd}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          Focusing on:
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}>
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
        <TouchableOpacity style={styles.button} onPress={() => clearSubject()}>
          <Text style={{ color: "white", textAlign: "center" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ProgressBar
        color="white"
        progress={progress}
        style={{ height: 10, marginTop: 20 }}></ProgressBar>
      <View>
        <Timing onChangeTime={changeTime}></Timing>
      </View>
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
