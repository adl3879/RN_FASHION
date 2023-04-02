import { useTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { Box, Text, type Theme } from "../../../components/Theme";

const formatter = new Intl.DateTimeFormat("en-US", { month: "short" });
const lerp = (a: number, b: number, t: number) => {
  return a * (1 - t) + b * t;
};

export const MARGIN = "xl";
const ROW_HEIGHT = 16;

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  const theme = useTheme<Theme>();

  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box
            key={t}
            flexDirection="row"
            alignItems="center"
            height={ROW_HEIGHT}
            top={t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0}
          >
            <Box width={theme.spacing[MARGIN]} paddingRight="s">
              <Text color="darkGrey" textAlign="right">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box flex={1} height={1} backgroundColor="grey" />
          </Box>
        ))}
      </Box>
      <Box
        marginLeft="l"
        height={theme.spacing.l}
        flexDirection="row"
        alignItems="center"
      >
        {dates.map((date, index) => (
          <Box key={index} width={step}>
            <Text color="darkGrey" textAlign="center">
              {formatter.format(new Date(date))}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
