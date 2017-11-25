import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Scan from "./screens/Scan";
import Profile from "./screens/Profile";
import RiwayatTransaksi from "./screens/RiwayatTransaksi"
import TopUpMember from "./screens/TopUpMember"
import RegisterMember from "./screens/RegisterMember"

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignIn: {
      screen: SignIn,
      screenProps: {name: "pitra"},
      navigationOptions: {
          title: "Sign In",
          headerStyle
      }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  }
});

export const SignedIn = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        headerStyle
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile",
        headerStyle
      }
    },
    Scan: {
        screen: Scan,
        navigationOptions: {
            title: "Scan Plat Nomor",
            headerStyle
        }
    },
    RiwayatTransaksi: {
        screen: RiwayatTransaksi,
        navigationOptions: {
            title: "Riwayat Transaksi",
            headerStyle
        }
    },
    TopUpMember: {
        screen: TopUpMember,
        navigationOptions: {
            title: "Top Up Member",
            headerStyle
        }
    },
    RegisterMember: {
        screen: RegisterMember,
        navigationOptions: {
            title: "Register Member",
            headerStyle
        }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
