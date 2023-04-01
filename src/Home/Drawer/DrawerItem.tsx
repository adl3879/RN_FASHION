import { RectButton } from "react-native-gesture-handler";
import RoundedIcon from "../../components/RoundedIcon";
import { Box, Theme, Text } from "../../components/Theme";
import type { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import type { HomeRoutes } from "../../../Routes";

export interface DrawerItemProps {
  icon: keyof typeof Icon.glyphMap;
  label: string;
  screen: keyof HomeRoutes;
  color: keyof Theme["colors"];
  onPress: () => void;
}

const DrawerItem = ({ icon, label, color, onPress }: DrawerItemProps) => {
  const theme = useTheme<Theme>();

  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }} {...{ onPress }}>
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
