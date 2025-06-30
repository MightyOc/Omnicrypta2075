import React from "react";

function ThreatGraph() {
  return (
    <div className="my-10 p-6 bg-[#0a0a0a] border border-cyan-500 rounded-xl">
      <h2 className="text-2xl text-cyan-400 mb-4 font-semibold">Threat Graph</h2>
      <div className="h-48 bg-cyan-900/20 border border-cyan-400 rounded-lg animate-pulse flex items-center justify-center text-cyan-200">
        [Threat graph loading...]
      </div>
    </div>
  );
}

export default ThreatGraph;