import React from "react";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}