import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AskPaper = ({ selectedPaper }) => {
  if (!selectedPaper) return null; // If no paper is selected, return nothing

  return (
    <div className="relative max-h-[316px] overflow-y-auto max-w-[1230px] bg-blue-50 p-6  shadow-md">
      {/* Close button */}
      <div className="absolute top-2 right-2">
        <FontAwesomeIcon
          icon={faClose}
          className="text-gray-600 cursor-pointer"
        />
      </div>

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
  );
};

export default AskPaper;
