import { CommonActions } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { Dimensions, Image, StyleSheet } from "react-native";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, Text, Theme } from "../../components/Theme";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const assets = [require("./assets/drawer.png")];

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation: any) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];

const Drawer = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          style={{ ...StyleSheet.absoluteFillObject }}
        >
          <Header
            title="MY PROFILE"
            left={{ icon: "x", onPress: () => navigation.closeDrawer() }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary"></Box>
        <Box flex={1} backgroundColor="primary"></Box>
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
          style={{ ...StyleSheet.absoluteFillObject }}
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            alignSelf="center"
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          {items.map((item, index) => (
            <DrawerItem key={index} {...item} />
          ))}
        </Box>
      </Box>
      <Box flex={0.2} backgroundColor="white" {...{ height }}>
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
