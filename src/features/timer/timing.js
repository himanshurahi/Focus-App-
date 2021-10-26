import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Timing({ onChangeTime }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onChangeTime(10)}>
        <Text style={styles.text}>10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onChangeTime(15)}>
        <Text style={styles.text}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onChangeTime(20)}>
        <Text style={styles.text}>20</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },

  button: {
    borderWidth: 1,
    borderColor: "white",
    width: "30%",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
