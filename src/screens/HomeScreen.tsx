import { View, FlatList } from "react-native";
import motos from "../data/motos.json";
import MotoCard from "../components/MotoCard";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MotoCard moto={item} />
        )}
      />
    </View>
  );
}