import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MotoCard({ moto }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>
        {moto.marca} {moto.modelo}
      </Text>

      <Text style={styles.precio}>
        ${moto.precio.toLocaleString()}
      </Text>

      <Text>Km: {moto.kilometros}</Text>

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
          Ver motocicleta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  precio: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  boton: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  textoBoton: {
    textAlign: "center",
    fontWeight: "bold",
  },
});