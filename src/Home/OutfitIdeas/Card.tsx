import { Dimensions, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Box } from "../../components/Theme";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
  position: number;
  onSwipe: () => void;
}

const Card = ({ position, onSwipe }: CardProps) => {
  const pos = useSharedValue(position);
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      isPressed.value = true;
      offset.value = {
        x: e.translationX,
        y: e.translationY,
      };
    })
    .onEnd(() => {})
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedTransform = useAnimatedStyle(() => {
    const scale = interpolate(pos.value, [0, 1], [1, 0.9]);
    const translateY = interpolate(pos.value, [0, 1], [0, -50]);
    const translateX = isPressed.value
      ? withSpring(offset.value.x, {
          damping: 10,
          velocity: 1200,
        })
      : withSpring(pos.value, {
          damping: 10,
          velocity: 0,
        });

    return {
      transform: [{ scale }, { translateY }, { translateX }],
    };
  });

  const animatedBackgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        pos.value,
        [0, 1],
        ["#C9E9E7", "#74BCB8"]
      ),
    };
  });

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <GestureDetector {...{ gesture }}>
        <Animated.View
          style={[
            { width, height, borderRadius },
            animatedBackgroundColor,
            animatedTransform,
          ]}
        />
      </GestureDetector>
    </Box>
  );
};

export default Card;
