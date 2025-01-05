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
  faChevronCircleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SidebarFilters from "../sideBar/Sidebar";
import { useState } from "react";

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
                <div className="bg-white p-4 flex flex-row justify-between space-x-2">
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
                <div className="flex-1 p-8 w-full max-w-[400px] mx-auto">
                  <p className="text-gray-600">
                    This is the main content area where you can add your
                    additional content.
                  </p>
                </div>

                {/* Footer */}
                <footer className="bg-white text-gray-800 p-20 mt-auto flex justify-center items-center">
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
