import React from 'react';
import {
    ListView,
    View,
    AsyncStorage,
    Picker,
    Text
} from 'react-native';
import { List, ListItem, Button, Card, FormLabel, FormInput } from 'react-native-elements'
import {onRegister} from '../auth'

export class FormRegistrasi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nama : null,
            email: null,
            handphone: null,
        };
    }

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>Nama</FormLabel>
                    <FormInput ref={inputn => this.inputn = inputn } placeholder="Tuliskan nama" onChangeText={(text) => this.setState({nama: text}) } />
                    <FormLabel>Email</FormLabel>
                    <FormInput ref={inpute => this.inpute = inpute } placeholder="Email address" onChangeText={(text) => this.setState({email: text}) } />
                    <FormLabel>Handphone</FormLabel>
                    <FormInput ref={inputh => this.inputh = inputh } placeholder="Handphone" onChangeText={(text) => this.setState({handphone: text}) } />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="Daftarkan"
                        onPress={() => {
                            onRegister(this.state.nama, this.state.email, this.state.handphone);
                            this.inputn.clearText();
                            this.inpute.clearText();
                            this.inputh.clearText();
                        }}
                    />

                </Card>
            </View>
        );
    }
}


