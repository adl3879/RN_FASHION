import { ScrollView } from "react-native";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, Text } from "../../components/Theme";
import type { DataPoint } from "./Graph/Graph";
import Graph from "./Graph/Graph";
import Transaction from "./Transaction";

const startDate = new Date("2020-09-01").getTime();
const numberOfMonths = 7;

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
    date: new Date("2021-02-06").getTime(),
    value: 200,
    color: "yellow",
    id: 243673,
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
        <ScrollView>
          {data.map((transaction) => (
            <Transaction key={transaction.id} {...{ transaction }} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
