import { useFormik } from "formik";
import { useRef } from "react";
import type { TextInput as RNTextInput } from "react-native";
import * as Yup from "yup";
import type { AuthNavigationProps } from "../../Routes";
import Button from "../components/Button";
import Container from "../components/Container";
import { Box, Text } from "../components/Theme";
import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
});

const Signup = ({ navigation }: AuthNavigationProps<"Signup">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignupSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: () => navigation.navigate("Home"),
    }
  );
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  return (
    <Container
      pattern={0}
      footer={
        <Footer
          title="Already have an account?"
          action="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      }
    >
      <Text variant="title1" textAlign="center" marginBottom="l">
        Create account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Let's us know what your name, email, and your password
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
          onSubmitEditing={() => password.current?.focus()}
        />
        <TextInput
          ref={password}
          icon="lock"
          placeholder="Enter your password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          autoComplete="password"
          secureTextEntry
          onSubmitEditing={() => passwordConfirmation.current?.focus()}
        />
        <TextInput
          icon="lock"
          placeholder="Confirm your password"
          onChangeText={handleChange("passwordConfirmation")}
          onBlur={handleBlur("passwordConfirmation")}
          error={errors.passwordConfirmation}
          touched={touched.passwordConfirmation}
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          autoComplete="password"
          secureTextEntry
          onSubmitEditing={() => handleSubmit()}
        />
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account?"
            onPress={handleSubmit}
          />
        </Box>
      </>
    </Container>
  );
};

export default Signup;
