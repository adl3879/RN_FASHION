import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import type { HomeNavigationProps } from "../../../Routes";
import Header from "../../components/Header";
import { Box, type Theme } from "../../components/Theme";
import Footer from "./Footer";
import Outfit, { type OutfitProps } from "./Outfit";

const { width: wWidth } = Dimensions.get("window");

const defaultOutfits: Omit<OutfitProps, "width">[] = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
  },
  {
    id: 6,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
  },
  {
    id: 7,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
  },
  {
    id: 8,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
  },
];

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const theme = useTheme<Theme>();
  const width = (wWidth - theme.spacing.m * 3) / 2;

  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Favorite Outfits"
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
              {defaultOutfits
                .filter((_, index) => index % 2 !== 0)
                .map((item) => (
                  <Outfit key={item.id} width={width} {...item} />
                ))}
            </Box>
            <Box>
              {defaultOutfits
                .filter((_, index) => index % 2 === 0)
                .map((item) => (
                  <Outfit key={item.id} width={width} {...item} />
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
          <Footer label="Add more to favorites" onPress={() => null} />
        </Box>
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
