import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import type { AppRoutes } from "./Routes";
import { AuthenticationNavigator } from "./src/Authentication";
import LoadAssets from "./src/components/LoadAssets";
import theme from "./src/components/Theme";
import { HomeNavigator } from "./src/Home";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AppStack.Navigator>
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="Home"
              component={HomeNavigator}
              options={{ headerShown: false }}
            />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
