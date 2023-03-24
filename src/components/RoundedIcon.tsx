import { Box, Text, Theme } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";
import type { BoxProps } from "@shopify/restyle";

export interface RoundedIconProps extends BoxProps<Theme> {
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio?: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio = 0.7,
  ...props
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

  return (
    <Box
      width={size}
      height={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor, ...props }}
    >
      <Text {...{ color }}>
        <Icon size={iconSize} style={{ textAlign: "center" }} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
