import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const GridView = ({ selectedValue }) => {
  const products = [
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      year: 2020,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
    {
      title: "The coffee-mango association promotes favorable soil conditions",
      authors: "Pan, L., Liu, Y., Yao, L., Grätzel, M., Hagfeldt, A.",
      date: "Dec 12 2017",
      afiliated_nation: "5",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi id eligendi ex cupiditate, est minus ducimus inventore, in porr nesciunt ad. Itaque veritatis pariatur adipisci a porro numquam nostrum reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum, doloribus ullam sint ducimus inventore repellat ea sunt assumenda quod porro optioaccusamus, ad, pariatur velit distinctio ipsum autem hic!",
      year: 2020,
      source: "Nature Communications 11(1):318",
      citedBy: 20,
      indexIn: "20 | Q1",
      ref: "54",
    },
  ];
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  console.log(selectedValue);

  const recordsToDisplay = products.slice(0, selectedValue);

  return (
    <div className="relative lg:max-h-[75vh] sm:max-h-[33vh] h-screen overflow-y-auto max-w-[1210px]">
      <div className="w-full">
        {recordsToDisplay.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 border rounded-lg shadow-lg mb-4 flex flex-wrap w-full"
          >
            <div className="flex flex-shrink-0 w-[5%] items-start pt-1">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="checkbox-input"
              />
            </div>

            <div className="flex-1 w-[60%] items-start">
              <div className="font-normal text-base pb-2 mt-0">
                {product.title}
              </div>
              <div className="text-gray-700 text-xs pb-2 underline">
                {product.authors}
              </div>

              <div className="flex flex-col-3 gap-4 text-gray-600 text-xs pb-1">
                <div className="border border-r-gray-600 pr-1">
                  {product.date}
                </div>
                <div className="underline border border-r-gray-600 pr-1">
                  SCIENTIFIC REPORTS
                </div>

                <div>
                  <p>Indexed In {product.indexIn}</p>
                </div>
              </div>

              <div className="text-gray-600 text-xs">{product.data}</div>

              <div className="flex flex-col-3 gap-4 text-gray-600 text-xs pb-1 pt-8">
                <div className="underline">Free Full Text from Publisher</div>
                <div className="underline">View Full Text</div>
                <div className="items-center">
                  <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                </div>
              </div>
            </div>

            <div className="w-[20%] flex flex-col items-end">
              <div className="text-gray-600 text-xs pr-12 border-b border-gray-400">
                <div className="text-lg">{product.citedBy}</div>
                <div className="text-xs  pb-2">Citations</div>
              </div>
              <div className="text-gray-600 text-xs pr-[36px] pb-16">
                <div className="text-lg">{product.ref}</div>
                <div className="text-xs">References</div>
              </div>
              <div className="text-gray-600 text-xs flex flex-row items-center space-x-2 border-t border-gray-400 pt-1 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-blue-600">Ask this paper</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;
