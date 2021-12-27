import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Hello } from "./src/conponents/Hello";

export default function App() {
  


  return (
    <View style={styles.container}>
      <Hello text="helloWorld" />
      <Text style={myStyle}>Open up App.js to start working on your app!</Text>
      <Text style={myStyle}>Open up App.js to start working on your app!</Text>
      <Text style={myStyle}>Open up App.js to start working on your app!</Text>
      <Text style={myStyle}>おはようございます。</Text>
      <Text style={myStyle}>こんにちは</Text>
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
});

const myStyle = { color: "#FF0000" };
