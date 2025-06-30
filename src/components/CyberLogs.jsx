import React, { useEffect, useState } from "react";

const initialLogs = [
  "🛡️ Firewall activated on port 443.",
  "🧠 Deepfake pattern detected from IP 182.74.XX.XX.",
];

const newLogs = [
  "🚨 Brute-force login attempt detected.",
  "👁️ AI scan found anomaly in node AX-21.",
  "📡 Suspicious activity blocked from external IP.",
  "🔒 Encryption layer updated to quantum resistance.",
  "🦠 Malware attempt neutralized from link redirect.",
];

function CyberLogs() {
  const [logs, setLogs] = useState(initialLogs);

  useEffect(() => {
    const interval = setInterval(() => {
      const log = newLogs[Math.floor(Math.random() * newLogs.length)];
      setLogs(prev => [log, ...prev.slice(0, 9)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111] p-6 border border-red-500 rounded-xl mt-10">
      <h2 className="text-2xl text-red-400 mb-4">Cyber Logs</h2>
      <ul className="list-disc pl-5 text-red-300 space-y-2 text-sm max-h-52 overflow-y-auto">
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default CyberLogs;
