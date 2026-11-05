import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
   const token = await AsyncStorage.getItem(
  "authorizationToken"
);

const response = await fetch(
  "http://192.168.0.196:3000/api/users",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);


      const data = await response.json();

      if (Array.isArray(data)) {
        setUsuarios(data);
      }
    } catch (error) {
      console.log(error);
      alert("Error al cargar usuarios");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        👤 Usuarios
      </Text>

      {usuarios.map((usuario) => (
        <View
          key={usuario.username}
          style={styles.card}
        >
          <Text>Usuario: {usuario.username}</Text>
          <Text>Nombre: {usuario.displayName}</Text>
          <Text>Email: {usuario.email}</Text>
          <Text>Rol: {usuario.role}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
});