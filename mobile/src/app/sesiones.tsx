import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Sesiones() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    cargarSesion();
  }, []);

  const cargarSesion = async () => {
    const usuario = await AsyncStorage.getItem("username");
const rol = await AsyncStorage.getItem("role");

alert(`Usuario: ${usuario} - Rol: ${rol}`);


    if (usuario) setUsername(usuario);
    if (rol) setRole(rol);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔑 Sesión Actual</Text>

      <View style={styles.card}>
        <Text>👤 Usuario: {username}</Text>
        <Text>🛡️ Rol: {role}</Text>
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