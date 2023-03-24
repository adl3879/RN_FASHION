import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import RoundedIcon from "../../../components/RoundedIcon";
import { Box } from "../../../components/Theme";

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Icon.glyphMap;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();

    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "button" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
        paddingHorizontal="m"
        marginBottom="m"
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            returnKeyType="next"
            returnKeyLabel="next"
            ref={ref}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            backgroundColor={!error ? "primary" : "danger"}
            size={SIZE}
            color="white"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
