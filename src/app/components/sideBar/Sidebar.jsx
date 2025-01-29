"use client";
import {
  faFilter,
  faHistory,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SidebarFilters = ({
  activeCategory,
  changeActiveCategory,
  toggleSideFilter,
  filterCategories,
}) => {
  const personCategories = [];

  const additionalPersonItems = [
    "Can cement become a 'smart' material?",
    "Report create about cancer",
  ];

  const [expandedFilters, setExpandedFilters] = useState(null);

  const toggleFilter = (category) => {
    setExpandedFilters((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const categoriesToDisplay =
    activeCategory === "person" ? personCategories : filterCategories;

  console.log(activeCategory);
  //h-[465px]
  return (
    <div className="w-full bg-white p-4 overflow-y-auto h-screen pb-4 listfilter">
      <div className="flex flex-row items-center">
        {/* Only show the filter icon if activeCategory is "filter" */}
        {activeCategory === "filter" && (
          <div className="flex flex-row items-center pb-4">
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            <h2 className="text-sm underline text-gray-800  font-normal">
              Filter
            </h2>
          </div>
        )}
      </div>

      {/* Render filter categories */}
      <ul className="space-y-2">
        {categoriesToDisplay.map((category) => (
          <li key={category.name}>
            <button
              className={`flex items-center justify-between w-full text-gray-800 font-medium text-sm hover:text-blue-600 border-b-[0.5px] pb-4 ${
                activeCategory === "filter" && expandedFilters === category.name
                  ? "text-blue-600 font-bold"
                  : ""
              }`}
              onClick={() => {
                changeActiveCategory("filter");
                toggleFilter(category.name);
              }}
            >
              <span>{category.name}</span>
              <span className="text-base">
                {expandedFilters === category.name ? "-" : "+"}
              </span>
            </button>
            {expandedFilters === category.name && (
              <div
                className="mt-2 pl-4 border-b-[0.5px] pb-2"
                onClick={(event) => event.stopPropagation()}
              >
                <ul className="space-y-2">
                  {category.options.slice(0, 5).map((option) => (
                    <li key={option.value}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                          onClick={(event) => event.stopPropagation()}
                        />
                        <span
                          className="text-sm text-gray-600"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {option.label}
                        </span>
                      </label>
                    </li>
                  ))}
                  <div className="flex flex-row justify-between items-center">
                    <button className="p-1 px-2 bg-blue-500 text-white text-xs rounded-sm">
                      Refine
                    </button>
                    <button
                      className="flex flex-row items-center p-1 text-blue-500"
                      onClick={() => toggleSideFilter(category.name)}
                    >
                      <FontAwesomeIcon icon={faEllipsis} />
                      <div className="pl-1 text-xs">Load More</div>
                    </button>
                  </div>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Render additional items when 'person' category is active */}
      {activeCategory === "person" && (
        <div className="mt-4 pb-60">
          <ul className="space-y-2 overflow-auto">
            {/* History and Lists items, shown once */}
            <li className="flex flex-row items-center justify-between pl-2 pr-2">
              <div className="border-b-[1.5px] pb-4 px-6 flex-grow flex flex-col border-b-gray-800">
                <FontAwesomeIcon
                  icon={faHistory}
                  className="text-gray-800 pr-9 text-sm"
                />
                <span className="font-light">History</span>
              </div>
              <div className="border-b-[0.5px] pb-4 px-6 flex-grow hover:border-b-gray-800">
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>

                <span className="font-light">Lists</span>
              </div>
            </li>
            <p className="font-normal text-sm text-blue-500 pb-4 pt-4">Today</p>
            {/* The rest of the additional items */}
            {additionalPersonItems.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 pb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarFilters;
