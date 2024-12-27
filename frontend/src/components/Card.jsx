import React from "react";

function Card({ title, onOpen }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64 h-64 flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <button
        onClick={onOpen}
        className="mt-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Open Community
      </button>
    </div>
  );
}

export default Card;