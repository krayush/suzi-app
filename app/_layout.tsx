import { Slot } from "expo-router";
import { View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

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
