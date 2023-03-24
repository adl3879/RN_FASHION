import { useTheme } from "@shopify/restyle";
import Constants from "expo-constants";
import type { ReactNode } from "react";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Box } from "./Theme";

const assets = [
  require("./assets/patterns/1.png"),
  require("./assets/patterns/2.png"),
  require("./assets/patterns/3.png"),
] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern?: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern = 0 }: ContainerProps) => {
  const theme = useTheme();
  const asset = assets[pattern];
  console.log(Constants.statusBarHeight);

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight +
          (Platform.OS === "android" ? Constants.statusBarHeight : 0) +
          1
        }
        bg="secondary"
      >
        <Box bg="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            flex={1}
            justifyContent="center"
            borderRadius="xl"
            borderTopLeftRadius="none"
            bg="white"
            padding="xl"
          >
            {children}
          </Box>
        </Box>
        <Box bg="secondary" py="l">
          {footer}
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
