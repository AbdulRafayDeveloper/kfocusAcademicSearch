"use client";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faEllipsis,
  faChartSimple,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faArrowDown,
  faTh,
  faListUl,
  faBars,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import SidebarFilters from "../sideBar/Sidebar";
import { useState } from "react";
import ListView from "../content/List";
import GridView from "../content/Grid";

const HomePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState("filter");

  const [isGridVisible, setIsGridVisible] = useState(false);

  // Handlers to switch views
  const showGridView = () => setIsGridVisible(true);
  const showListView = () => setIsGridVisible(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/16 pt-[0.5px] overflow-y-auto flex flex-col ">
            <a
              href="#chevron"
              className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700 hover:bg-white px-4 py-4 transition duration-200 "
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </a>
            <a
              href="#info"
              className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700  hover:bg-white px-4 py-4 transition duration-200 "
              onClick={() => changeActiveCategory("info")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
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
              <div className="flex flex-col flex-grow h-2/3">
                {/* Header */}
                <div className="bg-white pt-2 pb-2 pr-1 pl-1 flex flex-row justify-between space-x-2">
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
                      <p className="text-xs pr-1">Sort on: </p>
                      <p className="text-cyan-700 text-xs pr-1">
                        Date (newest)
                      </p>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="p-1 bg-cyan-700 text-white text-xs"
                      ></FontAwesomeIcon>
                    </div>
                    <div className="flex flex-row">
                      <p className="text-xs text-gray-700 pr-1">Total: </p>
                      <p className="text-blue-700 text-xs pr-1">1,525,452</p>
                      <p className="text-xs text-gray-700">articles </p>
                    </div>
                    <div className="flex flex-row pl-2">
                      <p className="text-xs pr-1">2/2600</p>

                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="p-1 bg-gray-100 text-gray-700 text-xs mr-2 border-[0.5px]"
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="p-1 bg-gray-100 text-gray-700 text-xs border-[0.5px]"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>

                {/* Fixed Size Content Area */}
                <div className="flex-1 pr-2 pl-2 pb-2 w-full mx-auto">
                  <nav className="mb-1">
                    <div className="pt-1 flex flex-row justify-between items-center space-x-2">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
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
                          <button onClick={showListView}>
                            <FontAwesomeIcon
                              icon={faTh}
                              className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                            />
                          </button>

                          {/* Button to show List View */}
                          <button onClick={showGridView}>
                            <FontAwesomeIcon
                              icon={faListUl}
                              className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                            />
                          </button>
                          <FontAwesomeIcon
                            icon={faBars}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </nav>

                  <div className=" w-full">
                    {isGridVisible ? <GridView /> : <ListView />}
                  </div>
                  <footer
                    className={`bg-white z-10 p-[26px] text-gray-800 mt-auto flex justify-center items-center absolute ${
                      isSidebarVisible ? "w-[940px]" : "w-full"
                    }`}
                  >
                    <nav aria-label="Page navigation example">
                      <ul className="flex items-center space-x-2 h-6 text-base">
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
                    <div className="pb-6">
                      <a
                        href="#"
                        className="absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center rounded-md bg-[#0076fa] text-white shadow-md hover:bg-[#005bb5]"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </a>
                    </div>
                  </footer>
                </div>

                {/* Footer */}
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
