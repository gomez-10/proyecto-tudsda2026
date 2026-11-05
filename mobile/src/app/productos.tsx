import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Productos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📦 Productos</Text>

      <View style={styles.fila}>
        <Text style={styles.encabezado}>Nombre</Text>
        <Text style={styles.encabezado}>Precio</Text>
        <Text style={styles.encabezado}>Stock</Text>
      </View>

      <View style={styles.fila}>
        <Text>Coca Cola</Text>
        <Text>$2500</Text>
        <Text>20</Text>
      </View>

      <View style={styles.fila}>
        <Text>Helado</Text>
        <Text>$1500</Text>
        <Text>10</Text>
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
    marginBottom: 20,
    textAlign: "center",
  },

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  encabezado: {
    fontWeight: "bold",
  },
});