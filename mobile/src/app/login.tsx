import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    if (!username || !password) {
      alert("Complete usuario y contraseña");
      return;
    }

    if (username === "admin") {
      alert("Bienvenido Administrador");
    } else {
      alert("Bienvenido Usuario");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔐 Login Kiosco</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={iniciarSesion}
      >
        <Text style={styles.textoBoton}>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>
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
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },

  boton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});