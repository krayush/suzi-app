import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Button, Headline } from "react-native-paper";

type Post = {
  id: number;
  title: string;
};

export default function Index() {
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState<Post[] | null>(null);

  const fetchPosts = useCallback(() => {
    setIsFetching(true);
    try {
      (async () => {
        const res = await fetch("https://dummyjson.com/posts");
        const data = await res.json();
        setPosts(data.posts);
      })();
    } catch {
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, 200);
    }
  }, [setIsFetching, setPosts]);

  const clearPosts = useCallback(() => setPosts([]), []);

  return (
    <View
      style={{
        flex: 1,
        padding: 8,
      }}
    >
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Button onPress={fetchPosts}>Fetch</Button>
        <Button onPress={clearPosts}>Clear</Button>
      </View>
      {isFetching && <ActivityIndicator />}
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item) => String(item.id)}
          style={{
            padding: 8,
          }}
          renderItem={({ item }) => (
            <View style={{ minHeight: 30 }}>
              {/* <Button> */}
              <Text>{item.title}</Text>
              {/* </Button> */}
            </View>
          )}
        />
      )}
    </View>
  );
}
