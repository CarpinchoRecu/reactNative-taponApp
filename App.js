import { ActivityIndicator, StatusBar } from "react-native";
import ProductsByCategoryScreen from "./src/screens/ProductsByCategoryScreen";

export default function App() {
  return (
    <>
      <StatusBar />
      <ActivityIndicator />
      <ProductsByCategoryScreen />
    </>
  );
}
