import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import type { AuthNavigationProps } from "../../Routes";
import Button from "../components/Button";
import { Box, Text } from "../components/Theme";

const { height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const position = { top: 0, right: 0, left: 0, bottom: 0 };

  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        height={SLIDE_HEIGHT}
        borderBottomRightRadius="xl"
        backgroundColor="slideGrey"
        alignItems="center"
        justifyContent="center"
      >
        <Svg width="375" height="210" viewBox="0 0 375 210" fill="none">
          <Path
            opacity="0.6"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M418.344 204.844C413.656 205.938 405.844 206.719 396.625 206.719C357.25 206.719 341.938 193.594 341.938 160.938V72.9688H318.344V38.5938H341.938V0H387.562V38.5938H418.5V72.9688H387.562V153.125C387.562 165.938 393.812 172.031 407.25 172.031C411.312 172.031 415.531 171.719 418.344 171.25V204.844ZM121.938 122.188C121.938 177.344 89.5938 209.688 38.9688 209.688C-11.6562 209.688 -44 177.188 -44 122.188C-44 67.9688 -11.1875 35 38.9688 35C89.125 35 121.938 67.8125 121.938 122.188ZM2.25 122.344C2.25 155.938 16.4688 174.844 38.9688 174.844C61.3125 174.844 75.5312 155.938 75.5312 122.344C75.5312 89.0625 61.1562 69.8438 38.9688 69.8438C16.7812 69.8438 2.25 89.0625 2.25 122.344ZM204.906 209.219C230.219 209.219 246.781 197.031 255.062 175.938H256V206.094H300.062V38.5938H254.438V134.531C254.438 156.719 241.781 171.25 221.469 171.25C201.312 171.25 190.219 159.375 190.219 137.031V38.5938H144.594V146.562C144.594 185.625 168.656 209.219 204.906 209.219Z"
            fill="white"
          />
        </Svg>
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="slideGrey" position="absolute" {...position}>
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            flex={1}
            justifyContent="space-evenly"
            alignItems="center"
            padding="xl"
          >
            <Text variant="title2">Let's get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate("Login")}
            />
            <Button label="Join us, it's free" onPress={() => null} />
            <Button
              variant="default"
              label="Forgot password?"
              onPress={() => null}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
