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
      "The research discusses various AI methodologies, including machine learning and natural language processing, to improve patient care and streamline medical workflows. The paper highlights case studies from hospitals and healthcare institutions that have successfully integrated AI solutions. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
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
