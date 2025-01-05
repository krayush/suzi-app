import { Href, Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
];

export default function Index() {
  return (
    <View>
      <Text className="font-pblack">Topics</Text>
      <FlatList
        data={appLinks}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (
          <View className="flex flex-row gap-4">
            <Text>{"\u2022"}</Text>
            <Link href={item.route}>{item.title}</Link>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    height: 8,
  },
});
