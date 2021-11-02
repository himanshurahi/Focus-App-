import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Focus } from "./src/features/focus/focus";
import { FocusHistory } from "./src/features/focus/focusHistory";
import Timer from "./src/features/timer/timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState();
  const [focusHistory, setFocusHistory] = useState([]);

  // React.useEffect(() => {
  //   if (focusSubject) {
  //     setFocusHistory([...focusHistory, { subject: focusSubject, status: 0 }]);
  //   }
  // }, [focusSubject]);

  const addFocus = (text) => {
    setFocusSubject(text);
  };

  const clearSubject = () => {
    setFocusHistory([...focusHistory, { subject: focusSubject, status: 1 }]);
    setFocusSubject(null);
  };
  console.log(focusHistory);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          clearSubject={clearSubject}
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusHistory([
              ...focusHistory,
              { subject: focusSubject, status: 2 },
            ]);
            setFocusSubject(null);
          }}></Timer>
      ) : (
        <>
          <Focus addFocus={addFocus} ></Focus>
          <FocusHistory FocusHistory={focusHistory} />
        </>
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
