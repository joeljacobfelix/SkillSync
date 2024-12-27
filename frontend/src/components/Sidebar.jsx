import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{ width: isOpen ? "25%" : "5%" }}
      className="bg-blue-500 p-4 h-full relative"
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white"
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
      {isOpen && (
        <h2 className="text-2xl font-bold text-white">Community Build</h2>
      )}
    </motion.div>
  );
}

export default Sidebar;