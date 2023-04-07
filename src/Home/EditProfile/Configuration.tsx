import { ScrollView } from "react-native";
import { Box, Text } from "../../components/Theme";
import CheckBoxGroup from "./CheckBoxGroup";
import RoundedCheckBoxGroup from "./RoundedCheckBoxGroup";

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
  { value: "billionaireBoysClub", label: "Billionaire Boys Club" },
  { value: "tommyHilfiger", label: "Tommy Hilfiger" },
  { value: "Yeezy", label: "Yeezy" },
];

const sizes = [
  { value: "s" },
  { value: "m" },
  { value: "l" },
  { value: "xl" },
  { value: "xxl" },
];

const colors = [
  { value: "#0C0D34" },
  { value: "#FF0058" },
  { value: "#50B9DE" },
  { value: "#00D99A" },
  { value: "#FE5E33" },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of outfit do you usually wear?</Text>
        <CheckBoxGroup options={outfitTypes} radio />
        <Text variant="body">What is your clothing size?</Text>
        <RoundedCheckBoxGroup options={sizes} />
        <Text variant="body">My preferred clothing colors</Text>
        <RoundedCheckBoxGroup options={colors} valueIsColor />
        <Text variant="body">My preferred brands</Text>
        <CheckBoxGroup options={preferredBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
