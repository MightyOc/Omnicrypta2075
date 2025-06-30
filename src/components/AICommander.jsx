import React, { useState } from "react";

function AICommander() {
  const [messages, setMessages] = useState([
    "[👾 AI] Welcome to OMNICRYPTA: Connected to global cyber defense grid.",
    "> Type 'scan', 'defend', or 'status' to execute a protocol."
  ]);
  const [input, setInput] = useState("");

  const handleCommand = () => {
    let response = "";
    switch (input.toLowerCase()) {
      case "scan":
        response = "> Initiating deep system scan... ✅ No threats found.";
        break;
      case "defend":
        response = "> Defense protocol activated. 🛡️ All ports secured.";
        break;
      case "status":
        response = "> Status: All systems optimal. Threat level: LOW.";
        break;
      default:
        response = "> Unknown command. Valid: scan, defend, status.";
    }

    setMessages((prev) => [...prev, `> ${input}`, response]);
    setInput("");
  };

  return (
    <div className="bg-[#111111] border border-green-400 rounded-xl p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-green-400 mb-4">AI Commander</h2>
      <div className="bg-black p-4 border border-green-600 rounded-md text-green-300 text-sm h-48 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 bg-[#0f0f0f] border border-green-400 px-2 py-1 text-green-200"
          placeholder="Enter command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
        />
        <button
          onClick={handleCommand}
          className="bg-green-600 text-black px-4 py-1 font-bold hover:bg-green-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AICommander;
