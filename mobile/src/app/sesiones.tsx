import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sesiones() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔑 Sesión Actual</Text>

      <View style={styles.card}>
        <Text>👤 Usuario: admin</Text>
        <Text>🛡️ Rol: admin</Text>
        <Text>✅ Estado: Activa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
});