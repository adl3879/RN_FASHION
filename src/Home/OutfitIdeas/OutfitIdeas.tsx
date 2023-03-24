import Header from "../../components/Header";
import { Box, Text } from "../../components/Theme";

const OutfitIdeas = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => true }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
    </Box>
  );
};

export default OutfitIdeas;
