import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import Button from "../../components/Button";
import { Box, type Theme } from "../../components/Theme";

interface CheckBoxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckBoxGroup = ({ options, radio }: CheckBoxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const theme = useTheme<Theme>();

  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;

        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            label={label}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            style={{
              width: "auto",
              height: "auto",
              padding: 14,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckBoxGroup;
