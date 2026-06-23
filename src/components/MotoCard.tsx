import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { calcularDepreciacion } from "../services/depreciacion";

export default function MotoCard({ moto }: any) {
  const resultado = calcularDepreciacion(
    moto.precio,
    moto.kilometros,
    moto.llantas
  );

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>
        🏍️ {moto.marca} {moto.modelo}
      </Text>

      <Text style={styles.precio}>
        ${moto.precio.toLocaleString()}
      </Text>

      <Text style={styles.info}>
        🛣️ Kilómetros: {moto.kilometros}
      </Text>

      <Text style={styles.info}>
        🛞 Llantas: {moto.llantas}
      </Text>

      <Text style={styles.valor}>
        💰 Valor estimado:
      </Text>

      <Text style={styles.valorPrecio}>
        ${resultado.valor.toLocaleString()}
      </Text>

      {resultado.revision && (
        <Text style={styles.alerta}>
          ⚠️ Requiere revisión mecánica
        </Text>
      )}

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
          CALCULAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    elevation: 7,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },

  precio: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 10,
  },

  info: {
    fontSize: 16,
    marginTop: 5,
  },

  valor: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },

  valorPrecio: {
    fontSize: 22,
    color: "green",
    fontWeight: "bold",
  },

  alerta: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },

  boton: {
    backgroundColor: "#FFD700",
    padding: 14,
    borderRadius: 12,
    marginTop: 15,
  },

  textoBoton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
});