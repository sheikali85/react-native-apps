import React, { Component } from "react";
import { View , Text} from "react-native";
import { Drawer } from "react-native-paper";
export default function Demo({ navigation }) {
  const [active, setActive] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Demo Screen</Text>
      <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
    </View>
  );
}
