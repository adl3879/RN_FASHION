import type { DrawerNavigationProp } from "@react-navigation/drawer";
import type { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes,
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
}

export type HomeRoutes = {
  OutfitIdeas: undefined;
}