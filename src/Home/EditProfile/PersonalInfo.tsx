import { ScrollView } from "react-native";
import { Box, Text } from "../../components/Theme";
import CheckBoxGroup from "./CheckBoxGroup";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const PersonalInfo = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">Account Information</Text>
        <CheckBoxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
