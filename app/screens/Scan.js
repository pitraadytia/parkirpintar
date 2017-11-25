import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import { onScan } from "../auth";

state = {id_plat: ''};

handleOnScan = (text) => state.id_plat = text;

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
      <Card>
          <FormLabel>Plat Nomor Kendaraan</FormLabel>
          <FormInput ref={input => this.input = input} placeholder="Masukkan Plat Nomor..." onChangeText={(text) => handleOnScan(text) } />
          <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Proses"
              onPress={() => {
                  onScan(state.id_plat);
                  state.id_plat = '';
                  this.input.clearText();
              }}
          />
      </Card>
  </View>
);
