import { ScrollView, View } from "react-native";
import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#BFEAF5",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BEECC4",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accessories",
    title: "Accessories",
    color: "#FFE8E9",
  },
  {
    id: "accessories2",
    title: "Accessories",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
