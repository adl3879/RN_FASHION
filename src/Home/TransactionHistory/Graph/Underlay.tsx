import { useTheme } from "@shopify/restyle";
import moment from "moment";
import { StyleSheet } from "react-native";
import { Box, Text, type Theme } from "../../../components/Theme";

const lerp = (a: number, b: number, t: number) => {
  return a * (1 - t) + b * t;
};

export const MARGIN = "xl";
const ROW_HEIGHT = 16;

interface UnderlayProps {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}

const Underlay = ({
  minY,
  maxY,
  step,
  startDate,
  numberOfMonths,
}: UnderlayProps) => {
  const theme = useTheme<Theme>();
  const minDate = moment(startDate);

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
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {date.format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
