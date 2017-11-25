import React from "react";
import { View, ListView, Text, Alert } from "react-native";
import { Card, Button } from "react-native-elements";

import { ListViewBasics }  from "../components/ListViewBasics"


export default ({ navigation }) => (


  <View style={{ paddingVertical: 20 }}>
      <Card>
          <ListViewBasics/>
      </Card>
  </View>
);
