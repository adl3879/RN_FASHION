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
  right?: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "white";

  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        name={left.icon}
        size={25}
        onPress={left.onPress}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>
        {title}
      </Text>

      {right ? (
        <RoundedIconButton
          name={right.icon}
          size={25}
          onPress={right.onPress}
          {...{ color, backgroundColor }}
        />
      ) : (
        <Box>{/* Placeholder */}</Box>
      )}
    </Box>
  );
};

export default Header;
