import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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

  const editarUsuario = async (
    username: string,
    role: string
  ) => {
    try {
      const token = await AsyncStorage.getItem(
        "authorizationToken"
      );

      const nuevoRol =
        role === "admin" ? "user" : "admin";

      await fetch(
        `http://192.168.0.196:3000/api/users/${username}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            role: nuevoRol,
          }),
        }
      );

      alert(
        `Rol actualizado a ${nuevoRol}`
      );

      cargarUsuarios();
    } catch (error) {
      console.log(error);
      alert("Error al editar usuario");
    }
  };

  const eliminarUsuario = async (
    username: string
  ) => {
    try {
      const token = await AsyncStorage.getItem(
        "authorizationToken"
      );

      await fetch(
        `http://192.168.0.196:3000/api/users/${username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Usuario eliminado");
      cargarUsuarios();
    } catch (error) {
      console.log(error);
      alert("Error al eliminar usuario");
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
          <Text>
            Usuario: {usuario.username}
          </Text>

          <Text>
            Nombre: {usuario.displayName}
          </Text>

          <Text>
            Email: {usuario.email}
          </Text>

          <Text>
            Rol: {usuario.role}
          </Text>

          <TouchableOpacity
            style={styles.botonEditar}
            onPress={() =>
              editarUsuario(
                usuario.username,
                usuario.role
              )
            }
          >
            <Text style={styles.textoBoton}>
              Editar Rol
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonEliminar}
            onPress={() =>
              eliminarUsuario(
                usuario.username
              )
            }
          >
            <Text style={styles.textoBoton}>
              Eliminar Usuario
            </Text>
          </TouchableOpacity>
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

  botonEditar: {
    marginTop: 10,
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 6,
  },

  botonEliminar: {
    marginTop: 10,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 6,
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});