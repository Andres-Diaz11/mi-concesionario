import { FlatList, SafeAreaView, Text, View } from "react-native";
import motos from "../../src/data/motos.json";
import MotoCard from "../../src/components/MotoCard";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#EAEAEA",
      }}
    >
      <View
        style={{
          backgroundColor: "#1B1B1B",
          padding: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text
          style={{
            color: "#FFD700",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          MotoStore
        </Text>

        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Concesionario de motocicletas
        </Text>
      </View>

      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={motos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MotoCard moto={item} />
        )}
      />
    </SafeAreaView>
  );
}