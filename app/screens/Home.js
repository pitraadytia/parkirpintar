import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button, List, ListItem, Icon } from "react-native-elements";



const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    image: require("../images/1.jpg"),
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    image: require("../images/2.jpg"),
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    image: require("../images/3.jpg"),
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    image: require("../images/4.jpg"),
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

const list = [
    {
        name: 'Ambil Gambar',
        icon: 'photo-camera',
        page: 'TakePhoto'
    },
    {
        name: 'Scan Plat Nomor',
        icon: 'photo-camera',
        page: 'Scan'
    },
    {
        name: 'Riwayat Transaksi',
        icon: 'shopping-cart',
        page: 'RiwayatTransaksi'
    },
    {
        name: 'Top Up Member',
        icon: 'forward',
        page: 'TopUpMember'
    },
    {
        name: 'Register Member',
        icon: 'person-add',
        page: 'RegisterMember'
    },
    {
        name: 'Log Out',
        icon: 'person-add',
        page: 'SignedOut'
    }
];


export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
      <List containerStyle={{marginBottom: 20}}>
          {
              list.map((l, i) => (
                  <ListItem
                      leftIcon={{name:l.icon}}
                      key={i}
                      title={l.name}
                      onPress={() =>  navigation.navigate(l.page) }
                  />
              ))
          }
      </List>
  </View>
);
