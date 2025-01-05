import { useCallback, useState } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Text,
} from "react-native";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = useCallback(
    (value: string) => {
      setPassword(value);
    },
    [setPassword]
  );

  const handleFormSubmit = useCallback(
    () => setIsSubmitted(true),
    [setIsSubmitted]
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        editable={!isSubmitted}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        editable={!isSubmitted}
        secureTextEntry
      />
      <Button title="Login" disabled={isSubmitted} onPress={handleFormSubmit} />
      {isSubmitted && (
        <Text>
          Logged in with {username} & {password}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    justifyContent: "center",
    height: "100%",
    padding: 16,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 2,
    padding: 8,
    height: 40,
  },
});
