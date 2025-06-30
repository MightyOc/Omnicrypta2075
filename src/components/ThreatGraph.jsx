import React, { useEffect, useState } from "react";

function ThreatGraph() {
  const [threat, setThreat] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreat(prev => {
        let newVal = prev + (Math.random() * 20 - 10);
        return Math.max(0, Math.min(100, newVal));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-10 p-6 bg-[#0a0a0a] border border-cyan-500 rounded-xl">
      <h2 className="text-2xl text-cyan-400 mb-4 font-semibold">Threat Graph</h2>
      <div className="relative h-6 bg-cyan-900/30 rounded-lg overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-700 ease-in-out"
          style={{ width: `${threat}%` }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-xs text-cyan-100">
          {`Threat Level: ${Math.round(threat)}%`}
        </div>
      </div>
    </div>
  );
}

export default ThreatGraph;
