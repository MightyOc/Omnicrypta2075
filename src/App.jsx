import React from "react";
import MatrixBackground from "./components/MatrixBackground";
import AICommander from "./components/AICommander";
import ThreatGraph from "./components/ThreatGraph";
import CyberLogs from "./components/CyberLogs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10 p-4 md:p-12">
        <Header />
        <div className="my-10">
          <AICommander />
        </div>
        <ThreatGraph />
        <CyberLogs />
        <Footer />
      </div>
    </div>
  );
}

export default App;