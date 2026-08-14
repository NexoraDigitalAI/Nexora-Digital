import { useState } from "react";

export default function DemoChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
      }}
    >
      {isOpen && (
        <div
          style={{
            width: "360px",
            height: "500px",
            background: "#080d1a",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "20px",
            marginBottom: "12px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.5)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "18px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ color: "white" }}>
                BluePeak Heating & Air
              </strong>

              <div
                style={{
                  color: "#22c55e",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                ● AI Assistant Online
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "20px",
              color: "white",
            }}
          >
            <div
              style={{
                background: "#151d2e",
                padding: "14px",
                borderRadius: "14px",
                maxWidth: "85%",
                lineHeight: "1.5",
                fontSize: "14px",
              }}
            >
              Hi! 👋 I'm BluePeak's AI assistant. How can I help
              with your heating or cooling needs today?
            </div>
          </div>

          <div
            style={{
              padding: "14px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="text"
              placeholder="Ask about AC repair..."
              style={{
                flex: 1,
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                padding: "12px",
                borderRadius: "10px",
                outline: "none",
              }}
            />

            <button
              style={{
                background: "#2563eb",
                border: "none",
                color: "white",
                width: "44px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ↑
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "14px",
          padding: "14px 20px",
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
        }}
      >
        {isOpen ? "Close Chat" : "✦ Try Our AI"}
      </button>
    </div>
  );
}