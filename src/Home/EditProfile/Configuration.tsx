import { ScrollView } from "react-native";
import { Box, Text } from "../../components/Theme";
import CheckBoxGroup from "./CheckBoxGroup";

const outfitTypes = [
  { value: "casual", label: "Casual" },
  { value: "formal", label: "Formal" },
  { value: "sporty", label: "Sporty" },
];

const preferredBrands = [
  { value: "adidas", label: "Adidas" },
  { value: "nike", label: "Nike" },
  { value: "puma", label: "Puma" },
  { value: "zara", label: "Zara" },
  { value: "uniqlo", label: "Uniqlo" },
  { value: "h&m", label: "H&M" },
  { value: "billionaireBoysClub", label: "Billionaire Boys Club" },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of outfit do you usually wear?</Text>
      </Box>
      <CheckBoxGroup options={outfitTypes} />
      <Box padding="m">
        <Text variant="body">My preferred brands</Text>
      </Box>
      <CheckBoxGroup options={preferredBrands} />
    </ScrollView>
  );
};

export default Configuration;
