import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        📦 Productos del Kiosco
      </Text>

      <Text>🥤 Coca Cola - $2500 - Stock: 20</Text>
      <Text>🍫 Alfajor - $800 - Stock: 15</Text>
      <Text>🍪 Galletitas - $1200 - Stock: 8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
