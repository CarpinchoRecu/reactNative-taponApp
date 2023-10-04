import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "./src/components/Header.jsx";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  const mas = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const menos = () => {
    setContador((prevContador) => prevContador - 1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={mas}>
          <Text style={styles.buttonText}>mas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={menos}>
          <Text style={styles.buttonText}>menos</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.buttonText, { marginTop: 20 }]}>
        Contador: {contador}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    top: 35
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
