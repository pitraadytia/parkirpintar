import { AsyncStorage } from "react-native";

export const USER_KEY = "token";

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
                console.log(responseData.meta.api_token);
                AsyncStorage.setItem(USER_KEY, responseData.meta.api_token);
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


export const onScan = async function(id_plat) {
    console.log(id_plat);
    let api_token = await AsyncStorage.getItem(USER_KEY);
    fetch('http://parkirpintar.wicida.ac.id/api/parking/store', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_token
        },
        body: JSON.stringify({
            id_plat: id_plat
        })
    }).then((response) => response.json())
        .then((responseData) => {
            alert(responseData.message);
        }).done();

};


export const onTopUp = async function(id_member, topup) {
    let api_token = await AsyncStorage.getItem(USER_KEY);
    fetch('http://parkirpintar.wicida.ac.id/api/employee/topup/store', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_token
        },
        body: JSON.stringify({
            id_user: id_member,
            topup : topup
        })
    }).then((response) => response.json())
        .then((responseData) => {
            alert(responseData.message);
        }).done();

};

export const onRegister = async function(name, email, hp, pwd, merk, plat, type, otp) {
    console.log(name);
    console.log(email);
    console.log(hp);
    console.log(pwd);
    console.log(merk);
    console.log(plat);
    console.log(type);
    console.log(otp);
    let api_token = await AsyncStorage.getItem(USER_KEY);

    fetch('http://parkirpintar.wicida.ac.id/api/employee/user/store', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_token
        },
        body: JSON.stringify({
            name: name,
            email : email,
            phone: hp,
            password: pwd,
            merk: merk,
            plat: plat,
            type: type,
            otp: otp
        })
    }).then((response) => response.json())
        .then((responseData) => {
            alert(responseData.message);
        }).done();
};

export const requestOTP = async function(hp) {
    console.log(hp);
    let api_token = await AsyncStorage.getItem(USER_KEY);
    fetch('http://parkirpintar.wicida.ac.id/api/employee/user/otp/' + hp, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_token
        }
    }).then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
        }).done();

};



