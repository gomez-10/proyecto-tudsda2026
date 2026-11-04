import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🏪 Kiosco Mobile
      </Text>

      <Text style={styles.subtitulo}>
        Sistema de gestión de productos
      </Text>

      <View style={styles.card}>
        <Text>📦 Productos</Text>
      </View>

      <View style={styles.card}>
        <Text>👤 Usuarios</Text>
      </View>

      <View style={styles.card}>
        <Text>🔑 Sesiones</Text>
      </View>

 <Pressable
  style={styles.boton}
  onPress={() => router.push("/productos")}
>
  <Text style={styles.textoBoton}>
    Gestionar Productos
  </Text>
</Pressable>

      <Pressable style={styles.boton}>
        <Text style={styles.textoBoton}>
          Iniciar Sesión
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },

  boton: {
    backgroundColor: "#2563eb",
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
  },

  textoBoton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});