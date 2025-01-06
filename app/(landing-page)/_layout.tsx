import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { icons } from "../../constants";
import { FC } from "react";

const TabIcon: FC<{
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
  name: string;
}> = ({ icon, color, focused, name }) => (
  <View className="items-center justify-center gap-1">
    <Image
      source={icon}
      className="w-6 h-6"
      resizeMode="contain"
      tintColor={color}
    />
    <Text style={{ fontSize: 8 }}>{name}</Text>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 6,
          backgroundColor: "#cecece",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: "Video",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Video"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-network"
        options={{
          title: "My Network",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="My Network"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Notifications"
            />
          ),
        }}
      />
    </Tabs>
  );
}
