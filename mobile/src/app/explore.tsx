import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ExploreScreen() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.196:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.titulo}>
  🚀 PRUEBA MOBILE NUEVA
</Text>

      {productos.length === 0 ? (
        <Text>No hay productos registrados.</Text>
      ) : (
        productos.map((producto: any) => (
          <View key={producto._id} style={styles.card}>
            <Text>📦 {producto.nombre}</Text>
            <Text>💲 {producto.precio}</Text>
            <Text>📊 Stock: {producto.stock}</Text>
          </View>
        ))
      )}
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
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
