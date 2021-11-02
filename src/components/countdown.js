import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Platform, Vibration } from "react-native";

const mintomills = (mins) => {
  return mins * 1000 * 60;
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

export default function Countdown({
  minutes = 0.2,
  isPaused = true,
  onProgress,
  onTimerEnd,
}) {
  const [millis, setMilles] = useState(mintomills(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  React.useEffect(() => {
    if (isPaused) {
      return;
    }
    let interval = setInterval(() => {
      setMilles((prev) => {
        if (prev == 0) {
          //vibrate here
          Vibration.vibrate(500);
          clearInterval(interval);
          onTimerEnd();
          return prev;
        }
        let timeLeft = prev - 1000;
        return timeLeft;
      });
    }, 1000);
    onProgress(millis / mintomills(minutes));
    return () => clearInterval(interval);
  }, [isPaused, millis]);

  React.useEffect(() => {
    setMilles(mintomills(minutes));
  }, [minutes]);

  return (
    <View style={styles.container}>
      <View elevation={5}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 80,
            backgroundColor: "rgba(94, 132, 226, 0.3)",
            fontWeight: "bold",
          }}>
          {formatTime(minute)} : {formatTime(seconds)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ container: {} });
