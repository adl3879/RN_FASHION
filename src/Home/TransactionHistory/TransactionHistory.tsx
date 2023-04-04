import { useTheme } from "@shopify/restyle";
import { Dimensions, Image, StyleSheet, ScrollView } from "react-native";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, Text, Theme } from "../../components/Theme";
import type { DataPoint } from "./Graph/Graph";
import Graph from "./Graph/Graph";
import TopCurve from "./TopCurve";
import Transaction from "./Transaction";

const aspectRatio = 3;
const footerHeight = Dimensions.get("window").width / aspectRatio;
const startDate = new Date("2020-09-01").getTime();
const numberOfMonths = 7;

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    footer: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,
      height: undefined,
      borderTopLeftRadius: theme.borderRadii.xl,
    },
    scrollView: {
      paddingBottom: footerHeight,
    },
  });

const data: DataPoint[] = [
  {
    date: new Date("2020-10-03").getTime(),
    value: 139.42,
    color: "primary",
    id: 243671,
  },
  {
    date: new Date("2020-11-04").getTime(),
    value: 280,
    color: "orange",
    id: 243672,
  },
  {
    date: new Date("2020-12-06").getTime(),
    value: 200,
    color: "yellow",
    id: 243673,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const theme = useTheme<Theme>();
  const styles = useStyles(theme);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="TRANSACTION HISTORY"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />

      <Box padding="m" flex={1}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text color="secondary" opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant="title1">1,245.00</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph {...{ data, startDate, numberOfMonths }} />
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {data.map((transaction) => (
            <Transaction key={transaction.id} {...{ transaction }} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve {...{ footerHeight }} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        aspectRatio={aspectRatio}
      >
        <Image
          style={styles.footer}
          source={require("../../components/assets/patterns/2.png")}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
