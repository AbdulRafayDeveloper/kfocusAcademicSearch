import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNames } from "country-list";
import {
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const MoreFilters = ({ ListOfFilters, toggleSideFilter }) => {
  var totalItems = ListOfFilters.length;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const categoryName = ListOfFilters[totalItems - 1];

  const [isCheckedItems, setIsCheckedItems] = useState(
    new Array(totalItems).fill(false)
  );

  const handleCheckboxChangeItems = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsCheckedItems(updatedChecked);
  };

  const [searchQuery, setSearchQuery] = useState("");

  // Filter the ListOfFilters based on the search query
  const filteredFilters = ListOfFilters.filter(
    (filter) =>
      typeof filter === "string" &&
      filter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filtersRef = useRef(null);

  const scrollToTop = () => {
    if (filtersRef.current) {
      filtersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="p-4 bg-white z-[99999] h-[400px] overflow-y-scroll shadow-lg border border-black">
      <div className="flex flex-row items-center justify-between mb-4 border-b border-b-gray-300">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          </svg>

          <div className="pl-2 text-sm font-semibold">
            {categoryName} ({totalItems})
          </div>
        </div>
        <button className="p-2 transition" onClick={() => toggleSideFilter()}>
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>
      </div>
      <div ref={filtersRef}>
        <form class="max-w-full mx-auto">
          <div class="flex">
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-100 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
              <button
                type="submit"
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-200 rounded-e-lg border border-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  class="w-4 h-4"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="blue"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md border border-blue-500 bg-blue-50 p-[1px] mt-4">
        <input
          type="checkbox"
          className="sr-only "
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-1 px-[12px] text-sm font-base ${
            !isChecked
              ? "text-primary bg-blue-500 text-white"
              : "text-body-color"
          }`}
        >
          Include
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-1 px-[12px] text-sm font-base ${
            isChecked
              ? "text-primary bg-blue-500 text-white"
              : "text-body-color"
          }`}
        >
          Exclude
        </span>
      </label>
      <div className="pt-5 flex flex-wrap gap-28">
        {Array(Math.ceil(filteredFilters.length / 8)) // Use filteredFilters here
          .fill()
          .map((_, columnIndex) => (
            <div key={columnIndex} className="grid grid-rows-8 gap-1">
              {filteredFilters
                .slice(columnIndex * 8, (columnIndex + 1) * 8) // Also update this to use filteredFilters
                .map((filter, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked[columnIndex * 8 + index]}
                      onChange={() =>
                        handleCheckboxChangeItems(columnIndex * 8 + index)
                      }
                    />
                    <span className="font-normal text-base pl-2">{filter}</span>
                  </div>
                ))}
            </div>
          ))}
      </div>

      <button className=" mt-4 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100">
        Show more...
      </button>
      <br />
      <button className=" mt-4 px-4 py-2 border bg-blue-500 rounded-md text-white hover:bg-blue-700">
        Apply
      </button>

      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 mr-4"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};

export default MoreFilters;
