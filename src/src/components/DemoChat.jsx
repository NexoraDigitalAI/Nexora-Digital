import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DemoChat() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm BluePeak's AI assistant. How can I help with your heating or cooling needs today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    const message = input.trim();

    if (!message || loading) return;

    const newMessages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
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
    <div className="demo-chat">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="demo-chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div className="demo-chat-header">
              <div className="demo-chat-business">
                <div className="demo-chat-avatar">B</div>

                <div>
                  <h3>BluePeak Heating & Air</h3>

                  <p>
                    <span></span>
                    AI Assistant • Online
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="demo-chat-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            <div className="demo-chat-demo-label">
              NEXORA AI DEMO
            </div>

            <div className="demo-chat-messages">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`demo-message ${
                    message.role === "user"
                      ? "demo-message-user"
                      : "demo-message-ai"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {loading && (
                <div className="demo-message demo-message-ai demo-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>

            <form
              className="demo-chat-form"
              onSubmit={sendMessage}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AC repair..."
                disabled={loading}
                maxLength={500}
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                ↑
              </button>
            </form>

            <div className="demo-chat-powered">
              Powered by <strong>Nexora Digital</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="demo-chat-launcher"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open AI assistant"
      >
        {isOpen ? (
          <span>×</span>
        ) : (
          <>
            <span className="demo-chat-icon">✦</span>

            <div>
              <strong>Try Our AI</strong>
              <small>Live Demo</small>
            </div>
          </>
        )}
      </button>
    </div>
  );
}