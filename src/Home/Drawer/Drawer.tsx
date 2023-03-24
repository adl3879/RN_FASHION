import { useTheme } from "@shopify/restyle";
import { Dimensions, Image } from "react-native";
import Header from "../../components/Header";
import { Box, Position, Text, Theme } from "../../components/Theme";
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
    label: "Edit Profiles",
    screen: "EditProfiles",
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
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = () => {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          {...{ ...Position.absoluteFillObject }}
        >
          <Header
            title="MY PROFILE"
            left={{ icon: "x", onPress: () => true }}
            right={{ icon: "shopping-bag", onPress: () => true }}
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
          {...{ ...Position.absoluteFillObject }}
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
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
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
          // borderTopLeftRadius="xl"
        />
      </Box>
    </Box>
  );
};

export default Drawer;
