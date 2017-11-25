import React from 'react';
import { Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Button } from 'react-native-elements';



export class FormCamera extends React.Component {
    state = {
        image: null,
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
                    title="Daftarkan"
                    onPress={() => {this.storePicture(this.state.image)} }
                />
            </View>
        );
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
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
            data.append('picture', {uri: PicturePath, name: 'selfie.jpg', type: 'image/jpg'});

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

            fetch("https://postman-echo.com/post", config)
                .then((responseData) => {
                    // Log the response form the server
                    // Here we get what we sent to Postman back
                    console.log(responseData);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}