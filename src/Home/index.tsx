import { createDrawerNavigator } from "@react-navigation/drawer";
import type { HomeRoutes } from "../../Routes";
import OutfitIdeas from "./OutfitIdeas/OutfitIdeas";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";
import FavoriteOutfits from "./FavoriteOutfits/FavoriteOutfits";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: { width: DRAWER_WIDTH },
    }}
    drawerContent={DrawerContent}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
  </Drawer.Navigator>
);
