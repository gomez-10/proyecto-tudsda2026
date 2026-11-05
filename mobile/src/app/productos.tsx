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

      <View style={styles.encabezado}>
        <Text style={styles.headerText}>Nombre</Text>
        <Text style={styles.headerText}>Precio</Text>
        <Text style={styles.headerText}>Stock</Text>
      </View>

      {productos.map((producto) => (
        <View
          key={producto._id}
          style={styles.fila}
        >
          <Text>{producto.nombre}</Text>
          <Text>${producto.precio}</Text>
          <Text>{producto.stock}</Text>
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

  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 10,
  },

  headerText: {
    fontWeight: "bold",
  },

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
