import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StyleSheet } from "react-native-web";
const courses = [
  { id: 1, title: "Front End Development With Angular" },
  { id: 2, title: "Front End Development With React" },
  { id: 3, title: "Fullstack Development -MEAN/MERN Stack" },
  { id: 4, title: "Mobile App Development" },
  { id: 5, title: "Machine Learning" },
  { id: 6, title: "Robotics" },
  { id: 7, title: "Digital Marketing" },
  { id: 8, title: "Graphic Designing" }
];
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View >
      <Text style={styles.header}>Light-Up Your Tech</Text>
      <Text style={styles.header}>Career With <Text style={styles.rexcoders}>RexCoders</Text></Text>
      </View>
      {courses.map((course) => (
        <TouchableOpacity
          key={course.id}
          onPress={() =>
            navigation.navigate("CourseDetail", { courseId: course.id })
          }
        >
          <Text style={styles.cards}>{course.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    color: "white",
    backgroundColor: "#03b97c",
    margin: 12,
    padding: 30,
  },
  header:{
    fontSize:30,
    color:'black',
    textAlign:'center',
    marginTop:20
  },
  rexcoders:{
    color:"#03b97c"
  }
});
