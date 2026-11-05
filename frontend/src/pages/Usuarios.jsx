import { useState, useEffect } from "react";

export default function Usuarios() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [usuarios, setUsuarios] = useState([]);

  const cargarUsuarios = async () => {
    try {
      const token = localStorage.getItem("authorizationToken");

      const response = await fetch(
        "http://localhost:3000/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        setUsuarios(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const crearUsuario = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/users",
        {
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
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Usuario creado correctamente");

        setUsername("");
        setDisplayName("");
        setEmail("");
        setPassword("");

        cargarUsuarios();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear usuario");
    }
  };

  const editarUsuario = async (username, role) => {
    try {
      const token = localStorage.getItem(
        "authorizationToken"
      );

      const nuevoRol =
        role === "admin" ? "user" : "admin";

      await fetch(
        `http://localhost:3000/api/users/${username}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            role: nuevoRol,
          }),
        }
      );

      alert(
        `Rol actualizado a ${nuevoRol}`
      );

      cargarUsuarios();
    } catch (error) {
      console.error(error);
      alert("Error al editar usuario");
    }
  };

  const eliminarUsuario = async (username) => {
    try {
      const token = localStorage.getItem(
        "authorizationToken"
      );

      await fetch(
        `http://localhost:3000/api/users/${username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Usuario eliminado");

      cargarUsuarios();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar usuario");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 Crear Usuario</h1>

      <input
        placeholder="Usuario"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="Nombre para mostrar"
        value={displayName}
        onChange={(e) =>
          setDisplayName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <select
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >
        <option value="admin">
          admin
        </option>

        <option value="user">
          user
        </option>
      </select>

      <br />
      <br />

      <button onClick={crearUsuario}>
        Crear Usuario
      </button>

      <hr />

      <h2>Usuarios registrados</h2>

      <table
        border="1"
        cellPadding="10"
      >
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.username}>
              <td>{usuario.username}</td>
              <td>{usuario.displayName}</td>
              <td>{usuario.email}</td>
              <td>{usuario.role}</td>

              <td>
                <button
                  onClick={() =>
                    editarUsuario(
                      usuario.username,
                      usuario.role
                    )
                  }
                >
                  Editar Rol
                </button>

                <button
                  style={{
                    marginLeft: "10px",
                    backgroundColor:
                      "red",
                    color: "white",
                  }}
                  onClick={() =>
                    eliminarUsuario(
                      usuario.username
                    )
                  }
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}