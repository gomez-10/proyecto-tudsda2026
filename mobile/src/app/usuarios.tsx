import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Usuarios() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👤 Usuarios</Text>

      <View style={styles.fila}>
        <Text style={styles.encabezado}>Usuario</Text>
        <Text style={styles.encabezado}>Rol</Text>
      </View>

      <View style={styles.fila}>
        <Text>admin</Text>
        <Text>admin</Text>
      </View>

      <View style={styles.fila}>
        <Text>juan</Text>
        <Text>user</Text>
      </View>

      <View style={styles.fila}>
        <Text>maria</Text>
        <Text>user</Text>
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

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  encabezado: {
    fontWeight: "bold",
  },
});