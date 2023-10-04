import { View, Text,StyleSheet } from "react-native"

const Header = () =>{
    return(
          <View style={styles.contenedor}>
            <Text style={styles.txt}>App de Contabilidad</Text>
          </View>
    )
}

const styles = StyleSheet.create({
    txt: {
      color: "#000",
      alignItems: "center",
      justifyContent:"center",
      fontWeight: "900",
      fontSize: 42,
      textAlign: "center"
    },
    contenedor: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent:"center"
    }
  });

export default Header