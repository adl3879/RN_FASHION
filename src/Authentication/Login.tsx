import { useFormik } from "formik";
import { useRef } from "react";
import type { TextInput as RNTextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Yup from "yup";
import type { AuthNavigationProps } from "../../Routes";
import Button from "../components/Button";
import Container from "../components/Container";
import { Box, Text } from "../components/Theme";
import Footer from "./components/Footer";
import Checkbox from "./components/Form/Checkbox";
import TextInput from "./components/Form/TextInput";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () => navigation.navigate("Home"),
  });
  const password = useRef<RNTextInput>(null);

  return (
    <Container
      pattern={2}
      footer={
        <Footer
          title="Don't have an account?"
          action="Sign up here"
          onPress={() => navigation.navigate("Signup")}
        />
      }
    >
      <Text variant="title1" textAlign="center" marginBottom="l">
        Welcome back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below and login to your account
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
          onSubmitEditing={() => handleSubmit()}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <BorderlessButton
            rippleColor="white"
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Forgot password
            </Text>
          </BorderlessButton>
        </Box>
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

export default Login;
