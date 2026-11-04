export default function Productos() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Productos del Kiosco</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Coca Cola</td>
            <td>$2500</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Alfajor</td>
            <td>$800</td>
            <td>15</td>
          </tr>

          <tr>
            <td>Galletitas</td>
            <td>$1200</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}