"use client";
import {
  faFilter,
  faHistory,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons"; // Added the user icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SidebarFilters = ({ activeCategory, changeActiveCategory }) => {
  const filterCategories = [
    { name: "Year", options: ["2023", "2022", "2021", "2020"] },
    {
      name: "Subject",
      options: ["Science", "Technology", "Engineering", "Math"],
    },
    {
      name: "Development Goals",
      options: ["Goal 1", "Goal 2", "Goal 3"],
    },
    { name: "Source Title", options: ["Source A", "Source B", "Source C"] },
    { name: "Publisher", options: ["Publisher 1", "Publisher 2"] },
    { name: "Author", options: ["Author A", "Author B"] },
    { name: "Language", options: ["English", "Spanish", "French"] },
  ];

  const personCategories = [];

  // Extra items to display when the "person" category is active
  const additionalPersonItems = [
    "Can cement become a 'smart' material?",
    "Report create about cancer",
  ];

  const [expandedFilters, setExpandedFilters] = useState({});

  const toggleFilter = (category) => {
    setExpandedFilters((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // Determine categories to display based on the active category
  const categoriesToDisplay =
    activeCategory === "person" ? personCategories : filterCategories;

  // Handle icon click for "person"
  const handlePersonIconClick = () => {
    changeActiveCategory("person");
  };

  return (
    <div className="w-full bg-white p-4 pb-96">
      <div className="flex flex-row items-center">
        {/* Only show the filter icon if activeCategory is "filter" */}
        {activeCategory === "filter" && (
          <div className="flex flex-row items-center pb-6">
            <FontAwesomeIcon
              icon={faFilter}
              className="text-gray-800 pr-4 font-normal text-base"
            />
            <h2 className="text-base underline text-gray-800  font-normal">
              Filter
            </h2>
          </div>
        )}
      </div>

      {/* Sidebar Item for 'Person' */}

      {/* Render filter categories */}
      <ul className="space-y-4">
        {categoriesToDisplay.map((category) => (
          <li key={category.name}>
            <button
              className={`flex items-center justify-between w-full text-gray-800 font-medium text-base hover:text-blue-600 border-b-[0.5px] pb-4 ${
                activeCategory === category.name
                  ? "text-blue-600 font-bold"
                  : ""
              }`}
              onClick={() => {
                changeActiveCategory(category.name);
                toggleFilter(category.name);
              }}
            >
              <span>{category.name}</span>
              <span className="text-xl">
                {expandedFilters[category.name] ? "-" : "+"}
              </span>
            </button>
            {expandedFilters[category.name] && (
              <div className="mt-2 pl-4">
                <ul className="space-y-2">
                  {category.options.map((option) => (
                    <li key={option}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Render additional items when 'person' category is active */}
      {activeCategory === "person" && (
        <div className="mt-4 pb-60">
          <ul className="space-y-2">
            {/* History and Lists items, shown once */}
            <li className="flex flex-row items-center justify-between pl-2 pr-2">
              <div className="border-b-[1.5px] pb-4 px-6 flex-grow border-b-gray-800">
                <FontAwesomeIcon
                  icon={faHistory}
                  className="text-gray-800 pr-2"
                />
                <span className="font-light">History</span>
              </div>
              <div className="border-b-[0.5px] pb-4 px-6 flex-grow hover:border-b-gray-800">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="text-gray-800 pr-2"
                />
                <span className="font-light">Lists</span>
              </div>
            </li>
            <p className="font-normal text-sm text-blue-500 pb-4 pt-4">Today</p>
            {/* The rest of the additional items */}
            {additionalPersonItems.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 pb-2">
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
