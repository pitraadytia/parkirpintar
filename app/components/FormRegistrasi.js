import React from 'react';
import {
    ListView,
    View,
    AsyncStorage,
    Picker,
    Text,
    ScrollView
} from 'react-native';
import { List, ListItem, Button, Card, FormLabel, FormInput } from 'react-native-elements';
import { onRegister, requestOTP } from '../auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export class FormRegistrasi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nama : "tommy bustomi",
            email: "tommyb@gmail.com",
            handphone: "081322387739",
            pwd: "123456",
            merk: "HONDA",
            plat: "E571PY",
            tipe: "Mobil",
            otp: null
        };
    };



    render() {
        return (
            <KeyboardAwareScrollView>
                <View>
                    <FormLabel>Nama</FormLabel>
                    <FormInput ref={inputn => this.inputn = inputn } placeholder="Tuliskan nama" onChangeText={(text) => this.setState({nama: text}) } value={this.state.nama} />
                    <FormLabel>Email</FormLabel>
                    <FormInput ref={inpute => this.inpute = inpute } placeholder="Email address" onChangeText={(text) => this.setState({email: text}) } value={this.state.email} />
                    <FormLabel>Handphone</FormLabel>
                    <FormInput ref={inputh => this.inputh = inputh } placeholder="Handphone" onChangeText={(text) => this.setState({handphone: text}) } value={this.state.handphone} />
                    <FormLabel>Password</FormLabel>
                    <FormInput ref={inputp => this.inputp = inputp } placeholder="Password" onChangeText={(text) => this.setState({pwd: text}) } value={this.state.pwd} />
                    <FormLabel>Merk</FormLabel>
                    <FormInput ref={inputm => this.inputm = inputm } placeholder="Merk" onChangeText={(text) => this.setState({merk: text}) } value={this.state.merk} />
                    <FormLabel>Plat</FormLabel>
                    <FormInput ref={inputpl => this.inputpl = inputpl } placeholder="Plat" onChangeText={(text) => this.setState({plat: text}) } value={this.state.plat} />
                    <FormLabel>Tipe Kendaraan</FormLabel>
                    <Picker
                        selectedValue={this.state.tipe}
                        onValueChange={(itemValue, itemIndex) => this.setState({tipe: itemValue})}>
                        <Picker.Item label="Mobil" value="Mobil" />
                        <Picker.Item label="Motor" value="Motor" />
                    </Picker>
                    <FormLabel>OTP</FormLabel>
                    <FormInput ref={inputotp => this.inputotp = inputotp } placeholder="Password" onChangeText={(text) => this.setState({otp: text}) } value={this.state.otp} />


                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="Generate OTP"
                        onPress={() => {
                            requestOTP(this.state.handphone)
                        }}
                    />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="Daftarkan"
                        onPress={() => {
                            onRegister(this.state.nama, this.state.email, this.state.handphone, this.state.pwd, this.state.merk, this.state.plat, this.state.tipe, this.state.otp);
                            /*this.inputn.clearText();
                            this.inpute.clearText();
                            this.inputh.clearText();
                            this.inputp.clearText();
                            this.inputotp.clearText();
                            this.inputm.clearText();
                            this.inputpl.clearText();*/
                        }}
                    />

                </View>
            </KeyboardAwareScrollView>
        );
    }
}


