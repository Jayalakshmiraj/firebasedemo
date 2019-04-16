import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../components/LoginComponent";
import Register from "../components/RegisterComponent";
import Profile from "../components/ProfileComponent";


// import themes from "../styles/theme.style";

const Route = createStackNavigator(
  {
    Login:Login,
    Register:Register,
    Profile:Profile,
   
  },
  {
    initialRouteName: "Login"
  },
//   {
//     navigationOptions: {
//       headerStyle: {
//         // backgroundColor: themes.BACKGROUND_COLOR,
//         paddingHorizontal: 10
//       },
//       headerTintColor: "#fff"
//     }
//   },
);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;