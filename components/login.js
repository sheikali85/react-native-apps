import React from "react";
import { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
  Alert
} from "react-native";
const Login = ({navigation}) => {
  const[username,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const handleSubmit=()=>{
    if(username===''){
      Alert.alert("Enter Username");
    }
    else if(password===''){
      Alert.alert("Enter Password");
    }
    else{
      if(username==='admin' && password==='admin'){
        navigation.navigate("Home")
      }
      else{
        Alert.alert("Invalid Username or Password");
      }
    }
  }
  return (
   
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.logo}>
            <Image source={require("../assets/logo.png")} />
          </View>
          <Text style={styles.header}>Login Page</Text>
          <TextInput placeholder="Username" style={styles.textInput} value={username} onChangeText={setUserName} />
          <TextInput secureTextEntry placeholder="Password" style={styles.textInput} value={password} onChangeText={setPassword} />
          <View style={styles.btnContainer}>
            <Button title="Submit" style={{color:"white"}} onPress={handleSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 36,
    marginBottom: 20,
    textAlign:'center'
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 40,
    marginTop: 20,
  },
  btnContainer: {
    alignSelf:'center',
    backgroundColor: "#03b97c",
    borderRadius:20,
    width:100,
    justifyContent:'center',
    color:'white',
    
  },
});
export default Login;

