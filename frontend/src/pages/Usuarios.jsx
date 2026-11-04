export default function Usuarios() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 Usuarios</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>admin</td>
            <td>admin@gmail.com</td>
            <td>Administrador</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}