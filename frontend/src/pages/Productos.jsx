import { useEffect, useState } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const cargarProductos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const agregarProducto = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          precio: Number(precio),
          stock: Number(stock),
        }),
      });

      console.log("STATUS:", response.status);

      setNombre("");
      setPrecio("");
      setStock("");

      cargarProductos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Productos del Kiosco</h1>

      <h3>Nuevo Producto</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <br />
      <br />

      <button onClick={agregarProducto}>
        Agregar Producto
      </button>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {productos.length === 0 && (
        <p>No hay productos registrados.</p>
      )}
    </div>
  );
}