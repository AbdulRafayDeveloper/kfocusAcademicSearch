"use client";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faChevronCircleLeft,
  faPerson,
  faInfo,
  faEllipsis,
  faChartSimple,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faPrint,
  faEnvelope,
  faFilePdf,
  faArrowDown,
  faTh,
  faListUl,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SidebarFilters from "../sideBar/Sidebar";
import { useState } from "react";
import ListView from "../content/List";

const HomePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState("filter");

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="flex flex-col">
        <Header />

        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/16 pt-[0.5px] overflow-y-auto flex flex-col ">
            <a
              href="#chevron"
              className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700 hover:bg-white px-4 py-4 transition duration-200 "
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </a>
            <a
              href="#filter"
              className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 ${
                activeCategory === "filter"
                  ? "bg-white"
                  : "hover:bg-white hover:text-blue-700"
              }`}
              onClick={() => changeActiveCategory("filter")}
            >
              <FontAwesomeIcon icon={faFilter} />
            </a>

            <a
              href="#filter"
              className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 ${
                activeCategory === "person"
                  ? "bg-white"
                  : "hover:bg-white hover:text-blue-700"
              }`}
              onClick={() => changeActiveCategory("person")}
            >
              <FontAwesomeIcon icon={faPerson} />
            </a>
            <a
              href="#info"
              className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700  hover:bg-white px-4 py-4 transition duration-200 "
              onClick={() => changeActiveCategory("info")}
            >
              <FontAwesomeIcon icon={faInfo} />
            </a>
            <a
              href="#ellipsis"
              className="flex items-center justify-center text-xl text-gray-800 hover:text-blue-700  hover:bg-white px-4 py-4 transition duration-200 "
              onClick={() => changeActiveCategory("ellipsis")}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </a>
          </div>

          <div className="flex w-full flex-col min-h-screen">
            <div className="flex w-full">
              {/* Sidebar */}
              <div
                className={`${
                  isSidebarVisible ? "w-[300px]" : "w-0"
                } transition-all duration-300 overflow-hidden`}
              >
                <SidebarFilters
                  activeCategory={activeCategory}
                  changeActiveCategory={changeActiveCategory}
                />
              </div>

              {/* Main Content Area */}
              <div className="flex flex-col flex-grow">
                {/* Header */}
                <div className="bg-white pt-4 pb-4 pr-1 pl-1 flex flex-row justify-between space-x-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      className="text-[#017fba] pr-1"
                    ></FontAwesomeIcon>
                    <span className="font-normal text-sm pr-4">
                      Analyze search results
                    </span>
                    <span className="text-blue-600 p-[0.5] py-[0.5px] px-2 bg-blue-200 font-normal text-xs">
                      Search History
                    </span>
                  </div>

                  <div className="flex flex-row ">
                    <div className="flex flex-row pr-2">
                      <p className="text-sm pr-1">Sort on: </p>
                      <p className="text-cyan-700 text-sm pr-1">
                        Date (newest)
                      </p>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="p-1 bg-cyan-700 text-white text-sm"
                      ></FontAwesomeIcon>
                    </div>
                    <div className="flex flex-row">
                      <p className="text-sm text-gray-700 pr-1">Total: </p>
                      <p className="text-blue-700 text-sm pr-1">1,525,452</p>
                      <p className="text-sm text-gray-700">articles </p>
                    </div>
                    <div className="flex flex-row pl-2">
                      <p className="text-sm pr-1">2/2600</p>

                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="p-1 bg-gray-100 text-gray-700 text-sm mr-2 border-[0.5px]"
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="p-1 bg-gray-100 text-gray-700 text-sm border-[0.5px]"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>

                {/* Fixed Size Content Area */}
                <div className="flex-1  pr-2 pl-2 pb-8 w-full mx-auto">
                  <nav className="mb-6">
                    <div className="pt-4 flex flex-row justify-between items-center space-x-2">
                      {/* Left Section */}
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="analyzeCheckbox"
                          className="w-4 h-4 accent-blue-600 cursor-pointer"
                        />
                        <span className="font-normal text-xs text-[#017fba]">
                          All
                        </span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="text-[#017fba] text-xs"
                        />
                        <span className="font-normal text-xs text-gray-600">
                          Export
                        </span>
                        <span className="font-normal text-xs text-gray-600">
                          Download
                        </span>
                        <span className="font-normal text-xs text-gray-600">
                          View citation overview
                        </span>
                        <span className="font-normal text-gray-600 text-xs border-r border-gray-600 pr-2">
                          Save to list
                        </span>
                        <FontAwesomeIcon
                          icon={faPrint}
                          className="text-xs text-gray-600"
                        />
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-xs text-gray-600"
                        />
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="text-xs text-gray-600"
                        />
                      </div>

                      {/* Right Section */}
                      <div className="flex flex-row items-center space-x-4">
                        {/* Overall Dropdown */}
                        <div className="flex items-center space-x-1">
                          <p className="text-xs text-blue-600">Overall</p>
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            className="text-blue-600 text-xs"
                          />
                        </div>

                        {/* Records/Page Dropdown */}
                        <div className="flex items-center space-x-1">
                          <p className="text-xs text-gray-700">Records/Page</p>
                          <div className="relative">
                            <button
                              className="flex items-center bg-gray-100 border border-gray-300 rounded px-2 py-1 text-xs text-blue-700 hover:bg-gray-200"
                              type="button"
                            >
                              1
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 ml-1 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            <ul className="absolute hidden mt-1 bg-white border border-gray-300 rounded shadow-lg text-gray-700 text-xs w-full">
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                10
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                20
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                50
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                100
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Layout Options */}
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon
                            icon={faTh}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                          <FontAwesomeIcon
                            icon={faListUl}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                          <FontAwesomeIcon
                            icon={faBars}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </nav>

                  <div className="bg-white w-full h-full">
                    <div>
                      <ListView />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <footer className="bg-white text-gray-800 p-8 pt-28 mt-auto flex justify-center items-center">
                  <nav aria-label="Page navigation example">
                    <ul className="flex items-center space-x-2 h-10 text-base">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          First
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Prev
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          6
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          7
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          8
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          9
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
