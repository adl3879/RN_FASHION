import { useState } from "react";
import { interpolate } from "react-native-reanimated";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box } from "../../components/Theme";
import Background from "./Background";
import Card from "./Card";

const cards = [
  {
    index: 3,
  },
  {
    index: 2,
  },
  {
    index: 1,
  },
  {
    index: 0,
  },
];

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="OUTFIT IDEAS"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index }) =>
            index >= currentIndex && (
              <Card
                key={index}
                position={interpolate(
                  index,
                  [currentIndex, cards.length - 1],
                  [0, 1]
                )}
                onSwipe={() => setCurrentIndex((prev) => prev + 1)}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
