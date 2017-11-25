import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";


state = {username: '', pwd: ''};

handleOnChangeUname = (text) => state.username = text;
handleOnChangePwd   = (text) => state.pwd = text;

export default ({ navigation }) => (    
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email/No Hp"  onChangeText={(text) => handleOnChangeUname(text) }  />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password" onChangeText={(text) => handleOnChangePwd(text) } />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn(navigation, state.username, state.pwd);
        }}
      />
    </Card>
  </View>
);
