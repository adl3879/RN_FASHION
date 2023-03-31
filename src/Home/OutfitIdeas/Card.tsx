import { Dimensions, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
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
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const cardPosition = useDerivedValue(() => {
    return withDelay(300, withTiming(position, { duration: 200 }));
  }, [position]);

  const gesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      offset.value = { x: e.translationX, y: e.translationY };
      isPressed.value = true;
    })
    .onEnd((e) => {
      if (e.translationX > 200 || e.translationX < -200) {
        runOnJS(onSwipe)();
      }
      offset.value = { x: 0, y: 0 };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedTransform = useAnimatedStyle(() => {
    const scale = interpolate(cardPosition.value, [0, 1], [1, 0.9]);
    const translateY = !isPressed.value
      ? withSpring(interpolate(cardPosition.value, [0, 1], [0, -50]), {
          damping: 10,
        })
      : offset.value.y > 0
      ? withSpring(offset.value.y, { damping: 10, velocity: offset.value.y })
      : 0;
    const translateX = isPressed.value
      ? withSpring(offset.value.x, { damping: 10, velocity: offset.value.x })
      : withSpring(0, { damping: 10 });

    return {
      transform: [{ scale }, { translateY }, { translateX }],
    };
  });

  const animatedBackgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        cardPosition.value,
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
