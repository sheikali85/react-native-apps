import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/homescreen";
import Login from "./components/login";
import AboutScreen from "./components/course-details";
import Demo from "./components/demo";
import CourseDetails from "./components/course-details";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
