import { useFormik } from "formik";
import { Linking } from "react-native";
import * as Yup from "yup";
import type { AuthNavigationProps } from "../../Routes";
import Button from "../components/Button";
import Container from "../components/Container";
import { Box, Text } from "../components/Theme";
import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );

  return (
    <Container
      pattern={0}
      footer={
        <Footer
          title="Doesn't work?"
          action="Try another way"
          onPress={() => Linking.openURL("mailto:help@support.com")}
        />
      }
    >
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot Password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account
      </Text>

      <>
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          autoCapitalize="none"
          autoComplete="email"
          returnKeyType="next"
          returnKeyLabel="next"
          onSubmitEditing={() => handleSubmit()}
        />

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset Password"
            onPress={handleSubmit}
          />
        </Box>
      </>
    </Container>
  );
};

export default ForgotPassword;
