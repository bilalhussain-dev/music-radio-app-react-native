import { View, Text, LogBox } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import RootStack from "./src/navigation/RootStack";
import AppState from "./src/context/AppState";

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <AppState>
      <StatusBar barStyle="light-content" />

      <RootStack />
    </AppState>
  );
}
