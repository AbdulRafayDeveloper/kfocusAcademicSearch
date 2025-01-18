import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AskPaper = ({ selectedPaper }) => {
  if (!selectedPaper) return null; // If no paper is selected, return nothing

  return (
    <div className="relative max-w-[1200px] overflow-y-auto bg-blue-50 p-6 shadow-md">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">{selectedPaper.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Authors:</strong> {selectedPaper.authors}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Year:</strong> {selectedPaper.year}
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Introduction</h3>
        <p className="text-base text-gray-800 mb-4">
          {selectedPaper.introduction}
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Summary</h3>
        <p className="text-base text-gray-800">{selectedPaper.summary}</p>
      </div>
    </div>
  );
};

export default AskPaper;
