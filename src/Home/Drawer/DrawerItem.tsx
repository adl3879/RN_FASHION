import { RectButton } from "react-native-gesture-handler";
import RoundedIcon from "../../components/RoundedIcon";
import { Box, Theme, Text } from "../../components/Theme";
import type { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

export interface DrawerItemProps {
  icon: keyof typeof Icon.glyphMap;
  label: string;
  screen: string;
  color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, label, screen, color }: DrawerItemProps) => {
  const theme = useTheme<Theme>();

  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
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
