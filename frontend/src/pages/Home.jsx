export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🏪 Kiosco Online</h1>

      <h2>Panel Principal</h2>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        📦 Gestión de Productos
      </div>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        👤 Gestión de Usuarios
      </div>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        🔑 Gestión de Sesiones
      </div>
    </div>
  );
}