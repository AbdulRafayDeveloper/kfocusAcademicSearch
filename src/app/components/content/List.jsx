import React from "react";

const ListView = () => {
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
        "SIXs: 3",
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
        "SIXs: 3",
      ],
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      afiliated_nation: "5",
      year: 2020,
      ref: "54",
      indexIn: "20 | Q1",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      details: [
        "View abstract",
        "View at Publisher",
        "Related documents",
        "Ask this paper",
        "SIXs: 3",
      ],
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-4 py-3 w-1/12">
              {/* Checkbox column */}
            </th>
            <th scope="col" className="px-4 py-3 w-8/12">
              Document Title
            </th>
            <th scope="col" className="px-4 py-3 w-2/12">
              Authors
            </th>
            <th scope="col" className="px-4 py-3 w-1/12">
              Year
            </th>
            <th scope="col" className="px-4 py-3 w-2/12">
              Source
            </th>
            <th scope="col" className="px-4 py-3 w-1/12">
              Cited by
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b`}
            >
              <td className="px-4 py-4 text-left align-top">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-4 text-left align-top">
                <p className="text-xs text-gray-500">Article</p>
                <div className="font-medium text-gray-900">{product.title}</div>
                <div className="text-xs text-blue-600 space-x-2 mt-8">
                  {product.details.map((detail, i) => (
                    <span key={i} className="cursor-pointer hover:underline">
                      {detail}
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
              <td className="px-4 py-4 text-left align-top">{product.year}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
