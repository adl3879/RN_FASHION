import { Children, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Box, Text } from "../../components/Theme";

const { width } = Dimensions.get("window");
const AnimatedBox = Animated.createAnimatedComponent(Box);

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const animatedStyle = useAnimatedStyle(() => {
    const index = tabs.findIndex((tab) => tab.id === selectedTab);
    const w = width / tabs.length;
    const position = w / 2 + w * index;
    const translateX = withTiming(
      interpolate(position, [0, width], [0, width]),
      { duration: 200 }
    );

    return {
      transform: [{ translateX }],
    };
  });

  const animatedBoxStyle = useAnimatedStyle(() => {
    const index = tabs.findIndex((tab) => tab.id === selectedTab);
    const pos = -index * width;
    const translateX = withTiming(interpolate(pos, [0, width], [0, width]), {
      duration: 500,
    });

    return {
      transform: [{ translateX }],
    };
  });

  return (
    <Box>
      <Box flexDirection="row">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={{ flex: 1 }}
            onPress={() => setSelectedTab(tab.id)}
          >
            <Box padding="m">
              <Text
                variant="title3"
                textAlign="center"
                color={tab.id !== selectedTab ? "darkGrey" : undefined}
              >
                {tab.label}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}
        <AnimatedBox
          position="absolute"
          left={0}
          bottom={0}
          backgroundColor="primary"
          width={8}
          height={8}
          style={[{ borderRadius: 4 }, animatedStyle]}
        />
      </Box>
      <AnimatedBox
        width={width * tabs.length}
        flexDirection="row"
        style={animatedBoxStyle}
      >
        {Children.map(children, (child, index) => {
          return (
            <Box
              key={index}
              flex={1}
              width={width}
              // marginHorizontal="m"
              overflow="hidden"
            >
              {child}
            </Box>
          );
        })}
      </AnimatedBox>
    </Box>
  );
};

export default Tabs;
