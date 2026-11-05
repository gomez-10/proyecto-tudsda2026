import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const ingresar = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.authorizationToken) {
      localStorage.setItem(
        "authorizationToken",
        data.authorizationToken
      );

      alert(`Bienvenido ${data.username}`);
    } else {
      alert(data.error || "Error al iniciar sesión");
    }
  } catch (error) {
    console.error(error);
    alert("Error de conexión con el servidor");
  }
};
  return (
    <div style={{ padding: "20px" }}>
      <h1>🔐 Login del Kiosco</h1>

      <div style={{ marginBottom: "15px" }}>
        <label>Usuario</label>

        <br />

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingrese usuario"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Contraseña</label>

        <br />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese contraseña"
        />
      </div>

      <button onClick={ingresar}>
        Iniciar Sesión
      </button>
    </div>
  );
}