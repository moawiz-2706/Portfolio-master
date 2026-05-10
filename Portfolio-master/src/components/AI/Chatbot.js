import React, { useState } from "react";
import { profile, experience, liveProjects, skillGroups, education } from "../../data/portfolioData";

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I can answer questions about Moawiz's work. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const context = `
    You are an AI assistant for Moawiz Bin Ammar's portfolio. 
    Moawiz is a Full-Stack Developer & GoHighLevel Specialist.
    
    Profile: ${JSON.stringify(profile)}
    Experience: ${JSON.stringify(experience)}
    Projects: ${JSON.stringify(liveProjects)}
    Skills: ${JSON.stringify(skillGroups)}
    Education: ${JSON.stringify(education)}

    Answer questions based ONLY on this information. Be professional and concise.
  `;

  async function send() {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const key = process.env.REACT_APP_OPENAI_KEY;
      if (!key) {
        setMessages((m) => [...m, { from: "bot", text: "I'm currently in 'offline mode' because the API key isn't configured. But Moawiz is a pro at GHL, React, and Automation!" }]);
        setLoading(false);
        return;
      }

      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({ 
          model: "gpt-3.5-turbo", 
          messages: [
            { role: "system", content: context },
            { role: "user", content: userMsg.text }
          ], 
          max_tokens: 400 
        }),
      });

      const data = await resp.json();
      const reply = data?.choices?.[0]?.message?.content || "I couldn't get a response right now.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch (e) {
      setMessages((m) => [...m, { from: "bot", text: "Error while contacting the AI API." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot-wrapper glass-card" style={{ padding: 12 }}>
      <div className="chat-history" style={{ maxHeight: 300, overflow: "auto", marginBottom: 8 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <strong style={{ textTransform: "uppercase", fontSize: 11 }}>{m.from}</strong>
            <div>{m.text}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input className="form-control" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about projects, automation, or GHL skills" />
        <button className="btn btn-primary" onClick={send} disabled={loading}>{loading ? "…" : "Send"}</button>
      </div>
    </div>
  );
}

export default Chatbot;
