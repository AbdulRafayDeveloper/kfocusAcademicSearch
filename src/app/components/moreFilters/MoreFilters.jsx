import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MoreFilters = ({ ListOfFilters = [], toggleSideFilter }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Default number of visible records
  const [isChecked, setIsChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckedItems, setIsCheckedItems] = useState([]);
  const filtersRef = useRef(null);

  // Initialize `isCheckedItems` whenever `ListOfFilters` changes
  useEffect(() => {
    if (Array.isArray(ListOfFilters)) {
      setIsCheckedItems(new Array(ListOfFilters.length).fill(false));
    }
  }, [ListOfFilters]);

  const handleCheckboxChangeItems = (absoluteIndex) => {
    const updatedChecked = [...isCheckedItems];
    updatedChecked[absoluteIndex] = !updatedChecked[absoluteIndex];
    setIsCheckedItems(updatedChecked);
  };

  const filteredFilters = ListOfFilters.slice(0, -1).filter(
    (filter) =>
      filter?.label &&
      typeof filter.label === "string" &&
      filter.label.toLowerCase().includes((searchQuery || "").toLowerCase())
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

  // Divide filters into two columns
  const firstColumn = maxVisibleFilters.filter((_, index) => index % 2 === 0);
  const secondColumn = maxVisibleFilters.filter((_, index) => index % 2 !== 0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const filterName =
    ListOfFilters[ListOfFilters.length - 1]?.label || "Filters";

  return (
    <div className="p-4 bg-white z-[99999] lg:max-h-[85vh] mobile:max-h-[85vh] md-mobile:max-h-[85vh] sm-mobile:max-h-[85vh] h-screen overflow-y-auto shadow-lg border border-black ">
      {/* Header */}
      <div className="flex flex-row items-center justify-between mb-4 border-b border-b-gray-300 mobile:overflow-x-auto md-mobile:overflow-x-auto sm-mobile:overflow-x-auto laptop:flex">
        <div className="flex flex-row">
          <div className="pl-2 text-sm font-semibold">
            {filterName} ({filteredFilters.length})
          </div>
        </div>
        <button className="p-2 transition" onClick={() => toggleSideFilter()}>
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>
      </div>

      {/* Search Input */}
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
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Toggle Include/Exclude */}
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

      {/* Filters in Two Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-5">
        {/* First Column */}
        <div>
          {firstColumn.map((filter, index) => {
            const absoluteIndex = maxVisibleFilters.indexOf(filter);
            return (
              <div key={absoluteIndex} className="flex items-center mb-2">
                <div className="flex items-center mr-auto">
                  <input
                    type="checkbox"
                    checked={isCheckedItems[absoluteIndex] || false}
                    onChange={() => handleCheckboxChangeItems(absoluteIndex)}
                    className="mr-2 border-5 border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex items-center">
                    <span className="text-base">{filter.label}</span>
                    <span
                      className="text-gray-600 text-sm ml-auto"
                      style={{
                        minWidth: "100px",
                        textAlign: "right",
                      }}
                    >
                      ({filter.value})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Column */}
        <div>
          {secondColumn.map((filter, index) => {
            const absoluteIndex = maxVisibleFilters.indexOf(filter);
            return (
              <div key={absoluteIndex} className="flex items-center mb-2">
                <div className="flex items-center mr-auto">
                  <input
                    type="checkbox"
                    checked={isCheckedItems[absoluteIndex] || false}
                    onChange={() => handleCheckboxChangeItems(absoluteIndex)}
                    className="mr-2 border-5 border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex items-center">
                    <span className="text-base">{filter.label}</span>
                    <span
                      className="text-gray-600 text-sm ml-auto"
                      style={{
                        minWidth: "100px",
                        textAlign: "right",
                      }}
                    >
                      ({filter.value})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Show More Button */}
      {visibleCount < filteredFilters.length && (
        <button
          className="mt-4 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
          onClick={handleShowMore}
        >
          Show more...
        </button>
      )}

      <br />
      {/* Apply Button */}
      <button className="mt-4 px-4 py-2 border bg-blue-500 rounded-md text-white hover:bg-blue-700">
        Apply
      </button>

      {/* Scroll to Top Button */}
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
