import React from "react";
import { View } from "react-native";
import { Card, Button, List, ListItem, Icon } from "react-native-elements";


const list = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
];

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
      <List containerStyle={{marginBottom: 20}}>
          {
              list.map((l, i) => (
                  <ListItem
                      subtitle={l.subtitle}
                      key={i}
                      title={l.name}
                  />
              ))
          }
      </List>
  </View>
);
