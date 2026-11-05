import AsyncStorage from "@react-native-async-storage/async-storage";
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

 const iniciarSesion = async () => {
  try {
    const response = await fetch(
      "http://192.168.0.196:3000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log(data);


    if (data.authorizationToken) {
        await AsyncStorage.setItem(
  "authorizationToken",
  data.authorizationToken
);
      alert(`Bienvenido ${data.username} (${data.role})`);
    } else {
      alert(data.error || "Login incorrecto");
    }
  } catch (error) {
    console.log(error);
    alert("Error al conectar con el servidor");
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