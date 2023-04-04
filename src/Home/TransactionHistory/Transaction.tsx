import moment from "moment";
import { Box, Text } from "../../components/Theme";
import type { DataPoint } from "./Graph/Graph";

interface TransactionProps {
  transaction: DataPoint;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Box
      marginTop="m"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            marginRight="s"
            width={10}
            height={10}
            style={{ borderRadius: 5 }}
          />
          <Text variant="title3">{`#${transaction.id}`}</Text>
        </Box>
        <Text color="darkGrey">{`$${transaction.value} - ${moment(
          transaction.date
        ).format("DD MMMM, YYYY")}`}</Text>
      </Box>
      <Box>
        <Text variant="button" color="secondary">
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
