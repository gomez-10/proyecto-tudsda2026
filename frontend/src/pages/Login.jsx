import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = () => {
    console.log("Usuario:", username);
    console.log("Contraseña:", password);

    alert("Login ejecutado");
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