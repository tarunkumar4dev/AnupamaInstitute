import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "bot", text: "Hi! Ask me anything about Anupama Institute." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: trimmed };
    const botMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "bot",
      text: "Thanks! Our team will get back to you. For admissions, see Contact page."
    };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 overflow-y-auto border rounded-md p-3 space-y-3 bg-white">
            {messages.map(m => (
              <div key={m.id} className={m.role === "user" ? "text-right" : "text-left"}>
                <span className={`inline-block px-3 py-2 rounded-lg ${m.role === "user" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-900"}`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;