import { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import type { AuthNavigationProps } from "../../../Routes";
import Dot from "./Dot";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best outfit here!",
    color: "#bfeaf5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#beecc4",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Ceate your individual & unique style and look amazing everyday",
    color: "#ffe4d9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#ffdddd",
  },
];

const OnBoarding = ({ navigation }: AuthNavigationProps<"OnBoarding">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    x.value = event.contentOffset.x;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        x.value,
        slides.map((_, i) => i * width),
        slides.map((slide) => slide.color)
      ),
    };
  }, []);

  const animatedFooterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value * -1 }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, animatedStyle]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label: title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject }, animatedStyle]}
        >
          <Animated.View style={[styles.footerContent]}>
            <View style={styles.pagination}>
              {slides.map((_, index) => (
                <Dot key={index} {...{ index, currentIndex: x }} />
              ))}
            </View>

            <Animated.View
              style={[
                { width: width * slides.length, flex: 1, flexDirection: "row" },
                animatedFooterStyle,
              ]}
            >
              {slides.map(({ subtitle, description }, index) => {
                const last = index === slides.length - 1;
                return (
                  <Subslide
                    key={index}
                    onPress={() => {
                      if (last) {
                        navigation.navigate("Welcome");
                      } else {
                        scroll.current?.scrollTo({
                          x: width * (index + 1),
                          animated: true,
                        });
                      }
                    }}
                    {...{ subtitle, description, last }}
                  />
                );
              })}
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoarding;
