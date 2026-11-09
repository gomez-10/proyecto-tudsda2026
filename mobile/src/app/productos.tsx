import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Productos() {
 const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.196:3000/api/products"
      );

      const data = await response.json();

      setProductos(data);
    } catch (error) {
      console.log(error);
      alert("Error al cargar productos");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        📦 Productos
      </Text>

      {productos.map((producto) => (
        <View
          key={producto._id}
          style={styles.card}
        >
          <Text>
            Nombre: {producto.nombre}
          </Text>

          <Text>
            Precio: ${producto.precio}
          </Text>

          <Text>
            Stock: {producto.stock}
          </Text>
        </View>
      ))}

      {productos.length === 0 && (
        <Text>
          No hay productos registrados.
        </Text>
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
    borderRadius: 8,
    marginBottom: 10,
  },
});