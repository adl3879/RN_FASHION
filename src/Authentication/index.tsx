import { createStackNavigator } from "@react-navigation/stack";
import type { AuthenticationRoutes } from "../../Routes";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import OnBoarding from "./OnBoarding/OnBoarding";
import PasswordChanged from "./PasswordChanged";
import Signup from "./Signup";
import Welcome from "./Welcome";

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="Signup" component={Signup} />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
    <AuthenticationStack.Screen
      name="PasswordChanged"
      component={PasswordChanged}
    />
  </AuthenticationStack.Navigator>
);
