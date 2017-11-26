import React from 'react';
import { Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Button, List, FormInput, FormLabel } from 'react-native-elements';

import { onScan } from "../auth";



export class FormCamera extends React.Component {
    state = {
        image: null,
        text : null
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Baca Text"
                    onPress={() => {this.storePicture(this.state.image)} }
                />

                <FormLabel>Plat Nomor Kendaraan</FormLabel>
                <FormInput ref={input => this.input = input} placeholder="Masukkan Plat Nomor..."  onChangeText={(text) => handleOnScan(text) } value={this.state.text} />

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Proses"
                    onPress={() => {
                        onScan(this.state.text);
                        this.setState({text: ''});
                        this.input.clearText();
                    }}
                />

            </View>
        );
    }


    handleOnScan = (text) => this.setState({text: text});

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [80,20]
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };


    storePicture(PicturePath) {
        console.log( PicturePath );
        if (PicturePath) {
            // Create the form data object
            let data = new FormData();
            data.append('picture', {uri: PicturePath, name: 'plat.jpg', type: 'image/jpg'});



            // Create the config object for the POST
            // You typically have an OAuth2 token that you use for authentication
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data;'
                },
                body: data,
            }

            fetch("http://ocrparkirpintar.wicida.ac.id/upload", config)
                .then((response) => response.json())
                .then((responseData) => {
                     console.log(responseData);
                     this.setState({text: responseData.text.replace(/\s+/g, "")});
                }).done();
        }
    }
}