import type { AuthNavigationProps } from "../../Routes";
import Button from "../components/Button";
import Container from "../components/Container";
import RoundedIcon from "../components/RoundedIcon";
import RoundedIconButton from "../components/RoundedIconButton";
import { Box, Text } from "../components/Theme";

const SIZE = 80;

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={1}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            backgroundColor="white"
            color="secondary"
            name="x"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box alignSelf="center">
        <RoundedIcon
          alignSelf="center"
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
        <Text variant="title1" textAlign="center" marginVertical="m">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="m">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("Welcome")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
