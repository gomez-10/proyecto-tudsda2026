import { useState } from "react";

export default function Usuarios() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const crearUsuario = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          displayName,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Usuario creado correctamente");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear usuario");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 Crear Usuario</h1>
      <p>
  Token guardado: {localStorage.getItem("authorizationToken")}
</p>

      <input
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Nombre para mostrar"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>

      <br />
      <br />

      <button onClick={crearUsuario}>
        Crear Usuario
      </button>
    </div>
  );
}