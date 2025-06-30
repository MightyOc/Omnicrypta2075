import React from "react";

const logs = [
  "🛡️ Firewall activated against port 443 attack.",
  "🧠 Deepfake detected from IP 182.74.XX.XX.",
  "📡 Zero-day malware blocked.",
  "👁️ AI anomaly scan completed - no breach.",
];

function CyberLogs() {
  return (
    <div className="bg-[#111] p-6 border border-red-500 rounded-xl mt-10">
      <h2 className="text-2xl text-red-400 mb-4">Cyber Logs</h2>
      <ul className="list-disc pl-5 text-red-300 space-y-2 text-sm">
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default CyberLogs;