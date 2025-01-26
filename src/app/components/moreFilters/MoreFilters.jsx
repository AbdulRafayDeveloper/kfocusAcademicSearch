import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MoreFilters = ({ ListOfFilters, toggleSideFilter }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Default number of visible records
  const totalItems = ListOfFilters.length;
  const [isChecked, setIsChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckedItems, setIsCheckedItems] = useState(
    new Array(totalItems).fill(false)
  );
  const filtersRef = useRef(null);

  const handleCheckboxChangeItems = (index) => {
    const updatedChecked = [...isCheckedItems];
    updatedChecked[index] = !updatedChecked[index];
    setIsCheckedItems(updatedChecked);
  };

  const filteredFilters = ListOfFilters.slice(0, -1).filter(
    (filter) =>
      typeof filter.label === "string" &&
      filter.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToTop = () => {
    if (filtersRef.current) {
      filtersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const maxVisibleFilters = filteredFilters.slice(0, visibleCount);

  const firstColumn = maxVisibleFilters.filter((_, index) => index % 2 === 0);
  const secondColumn = maxVisibleFilters.filter((_, index) => index % 2 !== 0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const filterName = ListOfFilters[ListOfFilters.length - 1];

  // Effect to reset visibleCount when the filters list changes
  useEffect(() => {
    setVisibleCount(8); // Reset visible count whenever filters change
  }, [ListOfFilters]);

  return (
    <div className="p-4 bg-white z-[99999] lg:max-h-[85vh] mobile:max-h-[85vh] md-mobile:max-h-[85vh] sm-mobile:max-h-[85vh] h-screen overflow-y-auto shadow-lg border border-black ">
      <div className="flex flex-row items-center justify-between mb-4 border-b border-b-gray-300 mobile:overflow-x-auto md-mobile:overflow-x-auto sm-mobile:overflow-x-auto laptop:flex">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          </svg>
          <div className="pl-2 text-sm font-semibold">
            {filterName} ({filteredFilters.length})
          </div>
        </div>
        <button className="p-2 transition" onClick={() => toggleSideFilter()}>
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>
      </div>

      <div ref={filtersRef}>
        <form
          className="max-w-full mx-auto"
          onSubmit={(e) => e.preventDefault()} // Prevent form submission
        >
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                className="block p-2 w-full text-sm bg-gray-50 rounded border focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Search ${filterName}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md border border-blue-500 bg-blue-50 p-[1px] mt-4">
        <input
          type="checkbox"
          className="sr-only"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-5">
        {/* Render the first column */}
        <div>
          {firstColumn.map((filter, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex items-center mr-auto">
                <input
                  type="checkbox"
                  checked={isCheckedItems[index]}
                  onChange={() => handleCheckboxChangeItems(index)}
                  className="mr-2 border-5 border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-base">{filter.label}</span>
              </div>
              <span
                className="text-sm text-gray-600 text-right"
                style={{ minWidth: "30px", display: "inline-block" }}
              >
                ({filter.value})
              </span>
            </div>
          ))}
        </div>

        {/* Render the second column */}
        <div>
          {secondColumn.map((filter, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex items-center mr-auto">
                <input
                  type="checkbox"
                  checked={isCheckedItems[index]}
                  onChange={() => handleCheckboxChangeItems(index)}
                  className="mr-2 border-5 border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-base">{filter.label}</span>
              </div>
              <span
                className="text-sm text-gray-600 text-right"
                style={{ minWidth: "30px", display: "inline-block" }}
              >
                ({filter.value})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Show more button */}
      {visibleCount < filteredFilters.length && (
        <button
          className="mt-4 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
          onClick={handleShowMore}
        >
          Show more...
        </button>
      )}

      <br />
      <button className="mt-4 px-4 py-2 border bg-blue-500 rounded-md text-white hover:bg-blue-700">
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
