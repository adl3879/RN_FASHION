import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { Text } from "../../components/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    lineHeight: 30,
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 40,
  },
});

interface SubslideProps {
  last?: boolean;
  subtitle: string;
  description: string;
  onPress: () => void;
}

const Subslide = ({ last, subtitle, description, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
