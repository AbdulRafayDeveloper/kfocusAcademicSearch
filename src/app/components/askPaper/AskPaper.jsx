import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AskPaper = () => {
  // Dummy data for selectedPaper
  const selectedPaper = {
    title: "Research on AI in Healthcare",
    authors: "John Doe, Jane Smith, Alice Johnson",
    year: 2023,
    introduction:
      "This paper explores the application of artificial intelligence in the healthcare industry, focusing on predictive models for patient diagnosis and treatment optimization.",
    summary:
      "The research discusses various AI methodologies, including machine learning and natural language processing, to improve patient care and streamline medical workflows. The paper highlights case studies from hospitals and healthcare institutions that have successfully integrated AI solutions.",
  };

  return (
    <div className="relative max-w-[1200px] askPaper h-screen overflow-y-auto bg-blue-50 p-6 shadow-md">
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
