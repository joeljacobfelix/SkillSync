import React from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

function App() {
  const handleOpenCommunity = () => {
    // Logic to open the community
    console.log("Community opened");
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-4 flex flex-wrap gap-4">
        <Card title="Community 1" onOpen={handleOpenCommunity} />
        <Card title="Community 2" onOpen={handleOpenCommunity} />
        {/* Add more Card components as needed */}
      </div>
    </div>
  );
}

export default App;