import React from 'react';
import {
    ListView,
    View,
    AsyncStorage,
    Picker,
    Text
} from 'react-native';
import { List, ListItem, Button, Card, FormLabel, FormInput, ButtonInformation } from 'react-native-elements'
import { onTopUp } from "../auth";

export class FormTopUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            member: '',
            members: [{id: '0', name: 'Select'}] ,
            topup: 0
        };
    }


    componentDidMount() {
        this.getMembersFromApi();
    }


    async  getMembersFromApi() {

        try {
            let api_token = await AsyncStorage.getItem('token');
            await fetch('http://parkirpintar.wicida.ac.id/api/employee/user', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        members: responseData.data
                    });
                }).done();
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>No HP User</FormLabel>
                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({member: itemValue})}>
                        {this.state.members.map((l, i) => {return <Picker.Item value={l.id} label={l.name} key={l.id}  /> })}
                    </Picker>
                    <FormLabel>Jumlah Top Up</FormLabel>
                    <FormInput ref={input => this.input = input} placeholder="Masukkan jumlah top up" onChangeText={(text) => this.setState({topup: text}) } />
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="Proses"
                        onPress={() => {
                            onTopUp(this.state.member, this.state.topup);
                            this.input.clearText();
                        }}
                    />
                </Card>
            </View>
        );
    }
}


