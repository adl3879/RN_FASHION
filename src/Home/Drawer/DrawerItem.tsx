import type { Feather as Icon } from "@expo/vector-icons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { RectButton } from "react-native-gesture-handler";
import type { HomeRoutes } from "../../../Routes";
import RoundedIcon from "../../components/RoundedIcon";
import { Box, Text, Theme } from "../../components/Theme";

interface BaseDrawerItem {
  icon: keyof typeof Icon.glyphMap;
  label: string;
  color: keyof Theme["colors"];
}

type ScreenDrawerItem = BaseDrawerItem & {
  screen: keyof HomeRoutes;
};
type ActionDrawerItem = BaseDrawerItem & {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
};

export type DrawerItemProps = ScreenDrawerItem | ActionDrawerItem;

const DrawerItem = ({ icon, label, color, ...props }: DrawerItemProps) => {
  const theme = useTheme<Theme>();
  const navigation =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();

  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() =>
        "screen" in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
    >
      <Box flexDirection="row" alignItems="center" p="m">
        <RoundedIcon
          name={icon}
          iconRatio={0.5}
          size={36}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="secondary" ml="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
