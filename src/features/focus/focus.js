import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = ({ addFocus }) => {
  const [tmpItem, settempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What whould you like to focus on?</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{ flex: 1 }}
          onSubmitEditing={(event) => {
            settempItem(event.nativeEvent.text);
          }}
        />
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 100,
            borderColor: "white",
            borderWidth: 2,
            marginLeft: 10,
          }}
          onPress={() => addFocus(tmpItem)}>
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    display: "flex",
  },
  titleContainer: {
    justifyContent: "center",
    padding: 15,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
