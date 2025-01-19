import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ListView = ({ toggleAskPaper }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null); // Track which row is expanded

  const products = [
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },

    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SDGs: 3",
      ],
      abstract:
        "This study explores the impact of coffee-mango associations on soil conditions, promoting microbial diversity.",
      keywords: [
        "coffee-mango association",
        "soil conditions",
        "microbial diversity",
        "sustainability",
        "agriculture",
      ],
    },
    // Add more product objects here...
  ];

  const toggleAbstract = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  return (
    <div className="relative max-h-[316px] overflow-y-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 h-1/2">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th
              scope="col"
              className="px-4 py-1 w-1/12 border border-b-[#0076fa]"
            >
              {/* Checkbox column */}
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-8/12 border border-b-[#0076fa]"
            >
              Document Title
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-2/12 border border-b-[#0076fa]"
            >
              Authors
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-1/12 border border-b-[#0076fa]"
            >
              Year
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-2/12 border border-b-[#0076fa]"
            >
              Source
            </th>
            <th
              scope="col"
              className="px-4 py-1 w-1/12 border border-b-[#0076fa]"
            >
              Cited by
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <tr
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-4 py-4 text-left align-top">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 text-left align-top">
                  <p className="text-xs text-gray-500">Article</p>
                  <div className="font-medium text-gray-900">
                    {product.title}
                  </div>
                  <div className="text-xs text-blue-600 space-x-2 mt-10">
                    {product.details.map((detail, i) => (
                      <span key={i} className="cursor-pointer hover:underline">
                        {detail === "View abstract" ? (
                          <button
                            onClick={() => toggleAbstract(index)}
                            className="text-blue-600 hover:underline focus:outline-none"
                          >
                            {detail}
                          </button>
                        ) : detail === "Ask this paper" ? (
                          <button
                            onClick={() => toggleAskPaper(index)}
                            className="text-blue-600 hover:underline focus:outline-none"
                          >
                            {detail}
                          </button>
                        ) : (
                          detail
                        )}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4 text-left align-top">
                  <div className="font-normal text-gray-900">
                    {product.authors}
                  </div>
                  <div className="text-xs text-gray-500 space-x-1 mt-2">
                    <span className="font-semibold">Affiliated nation:</span>
                    <span>{product.afiliated_nation}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-left align-top">
                  {product.year}
                </td>
                <td className="px-4 py-4 text-left align-top">
                  <div className="font-normal text-gray-900">
                    {product.source}
                  </div>
                  <div className="text-xs text-gray-500 space-x-1 mt-2">
                    <span className="font-semibold text-blue-700">
                      Indexed In:
                    </span>
                    <span>{product.indexIn}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-left align-top">
                  <div className="font-normal text-gray-900">
                    {product.citedBy}
                  </div>
                  <div className="text-xs text-gray-500 space-x-1 mt-12">
                    <span className="font-semibold">Ref:</span>
                    <span>{product.ref}</span>
                  </div>
                </td>
              </tr>
              {expandedRowIndex === index && (
                <tr className="border-b-gray-500">
                  <td colSpan={6} className="bg-white px-3 py-4 pl-16">
                    <div className="relative flex flex-col">
                      {/* Close button */}
                      <div className="flex flex-row border-b-[#c59b7d] border-b-2 pb-1">
                        <div className="flex flex-row items-center space-x-2">
                          <button
                            onClick={() => toggleAbstract(index)}
                            className="text-[#c59b7d] text-xs font-semibold hover:text-[#c59b9d]"
                          >
                            <div className="flex flex-row items-center space-x-2">
                              <p> Hide abstract</p>
                              <FontAwesomeIcon
                                icon={faChevronUp}
                                className="text-xs text-[#c59b7d]"
                              />
                            </div>
                          </button>
                        </div>
                        <button className="ml-4 text-blue-600  px-4 border border-gray-600 text-xs">
                          Full Text
                        </button>
                        <button className="ml-4 text-gray-700 text-xs">
                          View at Publisher
                        </button>
                      </div>
                      {/* Abstract content */}
                      <div className="text-gray-800 mt-4 pl-2">
                        <p>{product.abstract || "No abstract available."}</p>
                      </div>
                      {/* Keywords section */}
                      {product.keywords && product.keywords.length > 0 && (
                        <div className="mt-3 flex items-start pl-2">
                          <h5 className="text-md font-semibold text-gray-700 mr-2">
                            Keywords:
                          </h5>
                          <p className="text-gray-600 text-sm">
                            {product.keywords.join("; ")}
                          </p>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
