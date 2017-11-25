import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";


export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
      <Card>
          <FormLabel>Plat Nomor Kendaraan</FormLabel>
          <FormInput placeholder="Masukkan Plat Nomor..." />
          <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Proses"
              onPress={() => {
                  onSignIn().then(() => navigation.navigate("SignedIn"));
              }}
          />
      </Card>
  </View>
);
