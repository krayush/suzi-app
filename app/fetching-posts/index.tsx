import { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Button } from "react-native-paper";

type Post = {
  id: number;
  title: string;
};

export default function FetchingPosts() {
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
    <View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Button mode="contained-tonal" onPress={fetchPosts}>
          Fetch
        </Button>
        <Button mode="contained-tonal" onPress={clearPosts}>
          Clear
        </Button>
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
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
