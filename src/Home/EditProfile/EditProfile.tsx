import { Dimensions, StyleSheet } from "react-native";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, Text } from "../../components/Theme";
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";
import Tabs from "./Tabs";

const { width } = Dimensions.get("window");

const tabs = [
  { id: "configuration", label: "Configuration" },
  { id: "info", label: "Personal Info" },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={0.2} backgroundColor="white">
        <Box
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          style={{ ...StyleSheet.absoluteFillObject }}
        >
          <Header
            title="MY PROFILE"
            left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary"></Box>
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          padding="xl"
          style={{ ...StyleSheet.absoluteFillObject }}
        >
          <Box
            position="absolute"
            left={width / 2 - 50}
            top={-50}
            alignSelf="center"
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          <Tabs {...{ tabs }}>
            <Configuration />
            <PersonalInfo />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
