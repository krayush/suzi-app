import { Href, Link } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const appLinks: Array<{
  route: Href;
  title: string;
}> = [
  {
    route: "/fetching-posts",
    title: "Fetching posts",
  },
  {
    route: "/routing",
    title: "Routing",
  },
  {
    route: "/layout",
    title: "Layout",
  },
  {
    route: "/sign-in",
    title: "Sign in",
  },
  {
    route: "/home",
    title: "Home",
  },
];

export default function Index() {
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="font-pblack text-white">Topics</Text>
        <FlatList
          data={appLinks}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          renderItem={({ item }) => (
            <View className="flex flex-row gap-4">
              <Text className="text-white">{"\u2022"}</Text>
              <Link href={item.route} className="text-white">
                {item.title}
              </Link>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    height: 8,
  },
});
