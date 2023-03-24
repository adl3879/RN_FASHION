import { Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface DotProps {
  index: number;
  currentIndex: Animated.SharedValue<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        currentIndex.value / width,
        [index - 1, index, index + 1],
        [0.5, 1, 0.5],
        "clamp"
      ),
      transform: [
        {
          scale: interpolate(
            currentIndex.value / width,
            [index - 1, index, index + 1],
            [1, 1.25, 1],
            "clamp"
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: "#2CB9B0",
          width: 8,
          height: 8,
          borderRadius: 4,
          margin: 4,
        },
        animatedStyle,
      ]}
    ></Animated.View>
  );
};

export default Dot;
