import { useTheme } from "@shopify/restyle";
import { Dimensions } from "react-native";
import { Box, type Theme } from "../../../components/Theme";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const lerp = (a: number, b: number, t: number) => {
  return a * (1 - t) + b * t;
};

export interface Point {
  date: number;
  value: number;
  color?: keyof Theme["colors"];
}

interface GraphProps {
  data: Point[];
}

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme<Theme>();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.l;
  const height = canvasHeight - theme.spacing.l;
  const step = width / data.length;
  const values = data.map((point) => point.value);
  const dates = data.map((point) => point.date);
  const maxY = Math.max(...values);
  const minY = Math.min(...values);

  return (
    <Box paddingBottom="l" paddingLeft="l" marginTop={MARGIN}>
      <Underlay {...{ dates, maxY, minY, step }} />
      <Box {...{ width, height }}>
        {data.map((point, index) => {
          if (point.value === 0) return null;

          return (
            <Box
              key={point.date}
              position="absolute"
              left={index * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color || "primary"}
                opacity={0.1}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />
              <Box
                position="absolute"
                top={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                height={32}
                borderRadius="m"
                backgroundColor={point.color || "primary"}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
