import { useEffect, useRef, useState } from "react";

export default function DemoChat() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm BluePeak's AI assistant. How can I help with your heating or cooling needs today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const text = input.trim();

    if (!text || loading) {
      return;
    }

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: text,
      },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get AI response."
        );
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

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
            width: "370px",
            height: "520px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "#080d1a",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "20px",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              padding: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom:
                "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(8,13,26,1))",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #2563eb, #60a5fa)",
                  color: "white",
                  fontWeight: "900",
                }}
              >
                B
              </div>

              <div>
                <div
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  BluePeak Heating & Air
                </div>

                <div
                  style={{
                    marginTop: "4px",
                    color: "#22c55e",
                    fontSize: "11px",
                  }}
                >
                  ● AI Assistant Online
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: "26px",
              }}
            >
              ×
            </button>
          </div>

          {/* DEMO LABEL */}

          <div
            style={{
              padding: "8px",
              textAlign: "center",
              color: "#60a5fa",
              background: "rgba(37,99,235,0.05)",
              borderBottom:
                "1px solid rgba(255,255,255,0.05)",
              fontSize: "9px",
              fontWeight: "800",
              letterSpacing: "1.5px",
            }}
          >
            NEXORA AI LIVE DEMO
          </div>

          {/* MESSAGES */}

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "18px",
              overflowY: "auto",
            }}
          >
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={`${message.role}-${index}`}
                  style={{
                    maxWidth: "82%",
                    alignSelf: isUser
                      ? "flex-end"
                      : "flex-start",
                    padding: "11px 14px",
                    color: "white",
                    background: isUser
                      ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                      : "#151d2e",
                    borderRadius: isUser
                      ? "14px 14px 4px 14px"
                      : "14px 14px 14px 4px",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {message.content}
                </div>
              );
            })}

            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "11px 14px",
                  color: "#94a3b8",
                  background: "#151d2e",
                  borderRadius: "14px 14px 14px 4px",
                  fontSize: "13px",
                }}
              >
                BluePeak AI is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* FORM */}

          <form
            onSubmit={sendMessage}
            style={{
              padding: "14px",
              display: "flex",
              gap: "8px",
              borderTop:
                "1px solid rgba(255,255,255,0.08)",
              background: "#080d1a",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Ask about AC repair..."
              maxLength={500}
              disabled={loading}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "12px 14px",
                color: "white",
                background: "#111827",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                outline: "none",
                fontFamily: "inherit",
              }}
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                width: "44px",
                border: "none",
                borderRadius: "10px",
                color: "white",
                background: "#2563eb",
                cursor:
                  loading || !input.trim()
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  loading || !input.trim()
                    ? 0.5
                    : 1,
                fontSize: "18px",
              }}
            >
              ↑
            </button>
          </form>

          <div
            style={{
              paddingBottom: "10px",
              textAlign: "center",
              color: "#536176",
              background: "#080d1a",
              fontSize: "9px",
            }}
          >
            Powered by Nexora Digital
          </div>
        </div>
      )}

      {/* LAUNCH BUTTON */}

      <button
        type="button"
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        style={{
          padding: "15px 21px",
          border: "none",
          borderRadius: "14px",
          color: "white",
          background:
            "linear-gradient(135deg, #2563eb, #3b82f6)",
          fontWeight: "700",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow:
            "0 12px 35px rgba(37,99,235,0.4)",
        }}
      >
        {isOpen
          ? "Close Chat"
          : "✦ Try Our AI"}
      </button>
    </div>
  );
}