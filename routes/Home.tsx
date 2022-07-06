import React, { useState } from "react";
import { View, Text, Button } from "react-native";

type Props = {};

const Home: React.FC<Props> = ({}): JSX.Element => {

  // Dodatkowo przykład testu
  const [text, setText] = useState("Hello");
  return (
    <View>
      <Text>Hej</Text>
      <Text testID="text">{text}</Text>
      <Button
        testID="press"
        title="Click"
        onPress={() => {
          setText("Bye");
        }}
      ></Button>
    </View>
  );
};

export default Home;
