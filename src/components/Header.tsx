import type { Feather as Icon } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  title: string;
  left: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
  right: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
}

const Header = ({ title, left, right }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box flexDirection="row">
      <RoundedIconButton
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        size={25}
        onPress={left.onPress}
      />
      <Text color="white">{title}</Text>
      <RoundedIconButton
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        size={25}
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
