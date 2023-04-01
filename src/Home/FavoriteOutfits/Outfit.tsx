import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import RoundedIcon from "../../components/RoundedIcon";
import { Box, type Theme } from "../../components/Theme";

export type OutfitProps = {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
};

const Outfit = ({ outfit, width }: OutfitProps) => {
  const theme = useTheme<Theme>();
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected((prev) => !prev);
    outfit.selected = !outfit.selected;
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        width={width}
        height={width * outfit.aspectRatio - theme.spacing.m}
        marginBottom="m"
        borderRadius="m"
        alignItems="flex-end"
        padding="m"
        style={{ backgroundColor: outfit.color }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            size={24}
            color="white"
            backgroundColor="primary"
          />
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default Outfit;
