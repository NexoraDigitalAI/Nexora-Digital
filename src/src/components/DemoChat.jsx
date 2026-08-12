export default function DemoChat() {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
      }}
    >
      <button
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "14px 18px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Try Our AI
      </button>
    </div>
  );
}