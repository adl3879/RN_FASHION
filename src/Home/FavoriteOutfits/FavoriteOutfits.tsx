import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, type Theme } from "../../components/Theme";
import Footer from "./Footer";
import Outfit, { OutfitProps } from "./Outfit";
import TopCurve from "./TopCurve";

const { width: wWidth } = Dimensions.get("window");

type DefaultOutfit = OutfitProps["outfit"];
const defaultOutfits: DefaultOutfit[] = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
    selected: false,
  },
];

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const theme = useTheme<Theme>();
  const width = (wWidth - theme.spacing.m * 3) / 2;

  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="FAVORITE OUTFITS"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
        >
          <Box flexDirection="row">
            <Box marginRight="m">
              {outfits
                .filter(({ id }) => id % 2 !== 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} width={width} {...{ outfit }} />
                ))}
            </Box>
            <Box>
              {outfits
                .filter(({ id }) => id % 2 === 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} width={width} {...{ outfit }} />
                ))}
            </Box>
          </Box>
        </ScrollView>
        <Box
          position="absolute"
          left={0}
          bottom={0}
          right={0}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}
        >
          <TopCurve {...{ footerHeight }} />
          <Footer
            label="Add more to favorites"
            onPress={() => {
              setOutfits((currentOutfits) =>
                currentOutfits.filter((outfit) => !outfit.selected)
              );
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
