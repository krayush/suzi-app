import { Slot } from "expo-router";
import { View } from "react-native";
import "../assets/styles/global.css";

export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        padding: 8,
      }}
    >
      <Slot />
    </View>
  );
}
