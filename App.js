import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "./src/components/Header.jsx";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState("");
  const [ItemList, setItemList] = useState([]);

  const onChange = (text) => {
    setItems(text);
  };

  const addItemToList = () => {
    setItemList((PrevItemList) => [...PrevItemList, items]);
    setItems("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <TextInput value={items} style={styles.input} onChangeText={onChange} />
      </View>
      <View>
        <Text style={[styles.buttonText, { marginTop: 20 }]}>
          Historial: {ItemList}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    top: 35,
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
  input: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "white",
  },
});
