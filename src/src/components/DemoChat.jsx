import { useState } from "react";

export default function DemoChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 999999,
      }}
    >
      {isOpen && (
        <div
          style={{
            width: "360px",
            height: "480px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            background: "#080d1a",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              padding: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                }}
              >
                BluePeak Heating & Air
              </div>

              <div
                style={{
                  marginTop: "4px",
                  color: "#22c55e",
                  fontSize: "12px",
                }}
              >
                ● AI Assistant Online
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                color: "white",
                cursor: "pointer",
                fontSize: "26px",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "20px",
            }}
          >
            <div
              style={{
                maxWidth: "85%",
                padding: "14px",
                color: "white",
                background: "#151d2e",
                borderRadius: "14px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              Hi! 👋 I&apos;m BluePeak&apos;s AI assistant. How can I help with
              your heating or cooling needs today?
            </div>
          </div>

          <div
            style={{
              padding: "14px",
              display: "flex",
              gap: "8px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <input
              type="text"
              placeholder="Ask about AC repair..."
              style={{
                flex: 1,
                minWidth: 0,
                padding: "12px",
                color: "white",
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                outline: "none",
              }}
            />

            <button
              type="button"
              style={{
                width: "44px",
                border: "none",
                borderRadius: "10px",
                color: "white",
                background: "#2563eb",
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
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        style={{
          padding: "15px 21px",
          border: "none",
          borderRadius: "14px",
          color: "white",
          background: "#2563eb",
          fontWeight: "700",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 12px 35px rgba(37,99,235,0.4)",
        }}
      >
        {isOpen ? "Close Chat" : "✦ Try Our AI"}
      </button>
    </div>
  );
}
