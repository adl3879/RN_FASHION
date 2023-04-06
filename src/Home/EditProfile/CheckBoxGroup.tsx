import { useState } from "react";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";

interface CheckBoxGroupProps {
  options: {
    value: string;
    label: string;
  }[];
}

const CheckBoxGroup = ({ options }: CheckBoxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Box flexDirection="row" flexWrap="wrap">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;

        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            label={label}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
            style={{ width: "auto", height: "auto", padding: 14, margin: 4 }}
          />
        );
      })}
    </Box>
  );
};

export default CheckBoxGroup;
