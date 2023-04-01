import { useTheme } from "@shopify/restyle";
import { Path, Svg } from "react-native-svg";
import type { Theme } from "../../components/Theme";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const theme = useTheme<Theme>();
  const size = theme.borderRadii.xl;

  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        bottom: footerHeight,
        right: 0,
      }}
      viewBox="0 0 1 1"
    >
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={theme.colors.secondary} />
    </Svg>
  );
};

export default TopCurve;
