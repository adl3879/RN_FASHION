import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { Box } from "../../components/Theme";

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
  const inset = useSafeAreaInsets();

  return (
    <Box backgroundColor="secondary" padding="xl" borderTopLeftRadius="xl">
      <Box alignItems="center" style={{ paddingBottom: inset.bottom }}>
        <Button variant="primary" {...{ label, onPress }} />
      </Box>
    </Box>
  );
};

export default Footer;
