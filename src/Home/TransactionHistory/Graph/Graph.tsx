import { useTheme } from "@shopify/restyle";
import moment from "moment";
import { Dimensions, View } from "react-native";
import Animated, { Easing, Layout, withTiming } from "react-native-reanimated";
import { Box, type Theme } from "../../../components/Theme";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const lerp = (a: number, b: number, t: number) => {
  return a * (1 - t) + b * t;
};

const AnimatedBox = Animated.createAnimatedComponent(Box);

export interface DataPoint {
  date: number;
  value: number;
  color?: keyof Theme["colors"];
  id?: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme<Theme>();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.l;
  const height = canvasHeight - theme.spacing.l;

  const step = width / numberOfMonths;
  const values = data.map((point) => point.value);
  const maxY = Math.max(...values);
  const minY = Math.min(...values);

  const entering = (targetValues: any) => {
    "worklet";
    const animations = {
      originY: withTiming(targetValues.originY, {
        duration: 5000,
        easing: Easing.inOut(Easing.ease),
      }),
      opacity: withTiming(1, { duration: 2000, easing: Easing.ease }),
    };
    const initialValues = {
      originY: height,
      opacity: 0.5,
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <Box paddingBottom="l" paddingLeft="l" marginTop={MARGIN}>
      <Underlay {...{ minY, maxY, startDate, numberOfMonths, step }} />
      <Box {...{ width, height }}>
        {data.map((point) => {
          const index = moment(point.date).diff(startDate, "month");

          return (
            <AnimatedBox
              key={point.id}
              layout={Layout}
              entering={entering}
              position="absolute"
              left={index * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
              overflow="hidden"
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
            </AnimatedBox>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
