import { Href, Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

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
];

export default function Index() {
  return (
    <View>
      <FlatList
        data={appLinks}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Text>{"\u2022"}</Text>
            <Link href={item.route}>{item.title}</Link>
          </View>
        )}
      />
    </View>
  );
}
