import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, type Theme } from "../../components/Theme";
import { Feather as Icon } from "@expo/vector-icons";

interface RoundedCheckBoxGroupProps {
  options: { value: string }[];
  valueIsColor?: boolean;
}

const RoundedCheckBoxGroup = ({
  options,
  valueIsColor,
}: RoundedCheckBoxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const theme = useTheme<Theme>();

  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        const backgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.grey;
        const color = isSelected ? "white" : undefined;

        return (
          <TouchableOpacity
            key={value}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
          >
            <Box
              width={40}
              height={40}
              marginBottom="m"
              marginRight="s"
              justifyContent="center"
              alignItems="center"
              style={{
                borderRadius: 20,
                backgroundColor: valueIsColor ? value : backgroundColor,
              }}
            >
              {!valueIsColor ? (
                <Text variant="header" textAlign="center" color={color}>
                  {value.toUpperCase()}
                </Text>
              ) : (
                isSelected && <Icon name="check" color="white" size={16} />
              )}
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

export default RoundedCheckBoxGroup;
