import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = function(navigation, username, pwd) {
    fetch('http://parkirpintar.wicida.ac.id/api/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: username,
            password: pwd,
        })
    }).then((response) => response.json())
        .then((responseData) => {
            if (responseData.error) {
                alert('Login gagal silahkan coba kembali');
            }else{
                navigation.navigate('SignedIn');
            }
        }).done();

};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
