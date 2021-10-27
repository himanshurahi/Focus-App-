import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

export const FocusHistory = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d723",
        title: "Third Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e249d72",
        title: "Third Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-1545571e29d72",
        title: "Third Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-1435571e29d72",
        title: "Third Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-1454571e29d72",
        title: "Third Item",
      },
  ];

  const item = ({ item, index }) => {
    return (
      <View style = {{padding : 30, backgroundColor : '#6F8FAF', marginTop : 10}}>
        <Text style = {{color : 'white', textAlign : 'center'}}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style = {{marginTop : 10}}>
      <Text style = {{color : 'white', textAlign : 'center', fontSize : 20}}>We Are Focused on:</Text>
      <View style = {{padding : 10}}>
        <FlatList
          data={DATA}
          renderItem={item}
          keyExtractor={(item) => item.id}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
