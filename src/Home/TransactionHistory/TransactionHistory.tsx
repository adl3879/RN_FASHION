import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, Text } from "../../components/Theme";
import type { Point } from "./Graph/Graph";
import Graph from "./Graph/Graph";

const data: Point[] = [
  {
    date: new Date("2020-10-01").getTime(),
    value: 0,
  },
  {
    date: new Date("2020-11-02").getTime(),
    value: 0,
  },
  {
    date: new Date("2020-12-03").getTime(),
    value: 139.42,
    color: "primary",
  },
  {
    date: new Date("2021-01-04").getTime(),
    value: 280,
    color: "orange",
  },
  {
    date: new Date("2021-02-05").getTime(),
    value: 0,
  },
  {
    date: new Date("2021-03-06").getTime(),
    value: 200,
    color: "yellow",
  },
  {
    date: new Date("2021-04-07").getTime(),
    value: 0,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="TRANSACTION HISTORY"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />

      <Box padding="m">
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
        <Graph {...{ data }} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
