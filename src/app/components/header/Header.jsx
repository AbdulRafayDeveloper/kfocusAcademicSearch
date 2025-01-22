"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({ toggleFilterSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const toggleHeader = () => {
    setIsHeaderVisible((prevState) => !prevState);
  };

  const [selectedKeyword, setSelectedKeyword] = useState("Keywords");
  const handleSelectKeyword = (keyword) => {
    setSelectedKeyword(keyword);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="bg-white border-gray-200 lg:px-6 py-2 sm:px-0 custom-navbar">
        <div className="flex flex-wrap items-center mx-auto ">
          <Link href="/" className="flex items-center">
            <img
              src="/icons/future_logo.png"
              className="h-6 lg:h-8  ml-0 logo"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex ml-auto items-center lg:order-2 justify-center">
            <a
              href="#"
              className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 hidden lg:block py-2 lg:py-2.5 mr-2 focus:outline-none "
            >
              Melayu
            </a>

            <a
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 hidden lg:block py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex flex-row items-center justify-center">
                <p className="pr-1">3</p>
                {/* Circle Wrapper for Icon */}
                <div className="flex items-center justify-center w-6 h-6 border-[0.5px] border-blue-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-blue-600"
                    style={{ fontSize: "16px", width: "16px", height: "16px" }}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 lg:block hidden py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex flex-row items-center justify-center relative">
                <p className="pr-1">Journals</p>
                {/* Circle Wrapper for Icon */}
                <div className="flex items-center justify-center w-6 h-6 relative">
                  <FontAwesomeIcon
                    icon={faMobileScreen}
                    className="text-blue-600 w-[20px] h-[20px]"
                  ></FontAwesomeIcon>
                  {/* Red Dot */}
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border border-white"></span>
                </div>
              </div>
            </a>

            <button
              onClick={toggleFilterSidebar}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex flex-row items-center justify-center">
                {/* Circle Wrapper for Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="blue"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>

                <span className="ml-2 text-xs">Filter</span>
              </div>
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded={isHeaderVisible} // Dynamically set
              onClick={toggleHeader}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className="text-blue-600 w-4 h-4"
              />
            </button>
          </div>
          <div
            className="ml-20 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <div className="flex items-center justify-center space-x-2 pl-24">
              <div className="relative">
                <button
                  className="py-[4px] px-4 border-[0.5px] rounded-full flex items-center justify-center"
                  onClick={toggleDropdown}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-[#0076fa] text-sm mr-2"
                    style={{ fontSize: "16px", width: "16px", height: "16px" }}
                  />
                  <p className="text-[#0076fa] text-xs font-serif">
                    {selectedKeyword}
                  </p>
                </button>
                {isOpen && (
                  <div className="absolute mt-2 py-2 bg-white rounded-lg border-[0.5px] border-gray-300 z-[99999] w-48 shadow-xl">
                    <ul className="text-xs">
                      {[
                        "Title",
                        "Title, Keyword, and Abstract",
                        "Abstract",
                        "Keyword",
                        "Author",
                        "Affiliation",
                        "Full Text",
                        "Reference",
                        "Literature Source",
                        "Sustainable Development Goals",
                        "Subject",
                        "DOI",
                        "Copilot-AI",
                      ].map((keyword, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSelectKeyword(keyword)}
                        >
                          {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Keywords Button */}

              {/* Search Bar */}
              <div className="flex rounded-full border-[1px] overflow-hidden searchinput mx-auto font-[sans-serif]">
                <input
                  type="text"
                  placeholder="Search Something..."
                  className="flex-grow outline-none bg-white text-gray-600 text-sm px-4 py-2"
                />

                <div className="w-[1px] bg-gray-300 mx-1 mt-2 mb-2"></div>

                <button className="flex items-center justify-center">
                  <img
                    src="/icons/icons8-ai-32.png"
                    className=" w-6 h-6"
                    alt="AI Icon"
                  />
                </button>
                <div className="w-[1px] h-[60%] bg-gray-300 mx-1 self-center"></div>
                <button
                  type="button"
                  className="flex items-center justify-center bg-[#0076fa] px-4 border-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="fill-white"
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isHeaderVisible ? "flex" : "hidden"
        } lg:flex flex-wrap items-center mx-auto bg-[#0076fa] bg-cover lg:pr-10 lg:pl-10 pr-1 pl-1`}
      >
        {/* Header Items Section */}
        <div className="w-full mb-1 mt-1 text-white">
          <ul
            className="flex space-x-4 overflow-x-auto scrollbar-thin items-center justify-start"
            style={{ whiteSpace: "nowrap" }}
          >
            <li className="flex flex-col items-center pr-2 min-h-[60px] flex-grow">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-center">
                  <p className="font-normal text-base text-center pt-2">ALL</p>
                  <span className="text-white font-light text-sm">914,952</span>
                </div>
              </div>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#journal-articles"
                className="font-light text-sm text-center"
              >
                Journal <br />
                Articles
              </a>
              <span>
                <p className="font-light text-sm text-center pt-1 lg:pt-[12px]">
                  914,952
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#theses-dissertations"
                className="font-light text-sm text-center"
              >
                Theses & <br /> Dissertations
              </a>
              <span>
                <p className="font-light text-sm text-center pt-1 lg:pt-[12px]">
                  211,169
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#udlislamic-books"
                className="font-light text-sm text-center"
              >
                UDLislamic Books
              </a>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#conferences" className="font-light text-sm text-center">
                Conferences
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">
                  42,039
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#newspapers" className="font-light text-sm text-center">
                Newspapers
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">
                  101,857
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#books" className="font-light text-sm text-center">
                Books
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">0</p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#patents" className="font-light text-sm text-center">
                Patents
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">251</p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#standards" className="font-light text-sm text-center">
                Standards
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">
                  5,883
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#law-cases" className="font-light text-sm text-center">
                Law Cases
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">
                  57,587
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#monographic-serials"
                className="font-light text-sm text-center"
              >
                Monographic Serials
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">
                  2,387
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#reference-works"
                className="font-light text-sm text-center"
              >
                Reference Works
              </a>
            </li>

            <li className="flex flex-col items-center pr-2 flex-grow min-h-[60px]">
              <a href="#dataset" className="font-light text-sm text-center">
                Dataset
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[18px]">
                  115,339
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2">
              <span>
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className="text-white w-5 h-5"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
