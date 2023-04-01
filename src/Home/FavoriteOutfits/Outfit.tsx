import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import RoundedIcon from "../../components/RoundedIcon";
import { Box, type Theme } from "../../components/Theme";

export interface OutfitProps {
  color: string;
  aspectRatio: number;
  id: number;
  width: number;
}

const Outfit = ({ aspectRatio, color, width }: OutfitProps) => {
  const theme = useTheme<Theme>();
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity onPress={() => setSelected((prev) => !prev)}>
      <Box
        width={width}
        height={width * aspectRatio - theme.spacing.m}
        marginBottom="m"
        borderRadius="m"
        alignItems="flex-end"
        padding="m"
        style={{ backgroundColor: color }}
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
