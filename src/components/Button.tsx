import { useTheme } from "@shopify/restyle";
import type { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Text } from "../components/Theme";
import type { Theme } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  label?: string;
  variant: "default" | "primary";
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.button;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
