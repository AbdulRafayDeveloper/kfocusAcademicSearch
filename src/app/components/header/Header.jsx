"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

const Header = ({ toggleFilterSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const toggleHeader = () => {
    setIsHeaderVisible((prevState) => !prevState);
  };

  const [selectedKeyword, setSelectedKeyword] = useState("Keywords");
  const [query, setQuery] = useState(""); // User input
  const [suggestions, setSuggestions] = useState([]); // Auto-suggestions
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  const searchBarRef = useRef(null); // Ref for the search bar container

  // Mock API call to fetch suggestions
  const fetchSuggestions = async (searchQuery) => {
    setIsLoading(true);

    // Mock data (replace with real API)
    const mockData = [
      "Journal",
      "Writer",
      "Blog",
      "Headline",
      "Quiz",
      "Facts",
      "Explore",
      "Knowledge",
      "Update",
      "Review",
    ];

    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mockData.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        resolve(filtered);
        setIsLoading(false);
      }, 500); // 500ms delay to simulate API response time
    });
  };

  // Dynamically fetch suggestions when user types
  useEffect(() => {
    if (query) {
      const debounceFetch = setTimeout(() => {
        fetchSuggestions(query).then((results) => setSuggestions(results));
      }, 300); // Debounce: Fetch after 300ms of typing

      return () => clearTimeout(debounceFetch); // Cleanup debounce on new input
    } else {
      setSuggestions([]); // Clear suggestions if the input is empty
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsDropdownOpen(true); // Open dropdown when typing
  };

  const handleSearchBarClick = () => {
    setIsDropdownOpen(true); // Open dropdown when search bar is clicked
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions after selection
    setIsDropdownOpen(false); // Close dropdown
  };

  const dropdownRef = useRef(null);
  const handleSelectKeyword = (keyword) => {
    setSelectedKeyword(keyword);
    setIsOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicking outside of it
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="bg-white border-gray-200 lg:px-6 py-2">
        <div className="flex items-center justify-between mx-auto">
          {/* Logo Section */}
          <Link href="/" className="flex items-center flex-grow-0">
            <img
              src="/icons/future_logo.png"
              className="h-6 lg:h-8 mobile:ml-2 ml-0 logo md-mobile:ml-2 sm-mobile:ml-2"
              alt="Flowbite Logo"
            />
          </Link>

          {/* Search Bar and Keywords */}
          <div className="flex items-center space-x-4 flex-1 justify-center mobile:hidden sm-mobile:hidden md-mobile:hidden laptop:flex">
            {/* Keyword Dropdown Section */}
            <div
              className="flex items-center justify-center space-x-2"
              ref={dropdownRef}
            >
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
                  <p
                    className="text-[#0076fa] text-xs font-serif truncate"
                    style={{
                      maxWidth: "88px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
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
            </div>

            {/* Search Bar Section */}
            <div
              className="relative flex-grow"
              ref={searchBarRef}
              style={{ maxWidth: "60%" }} // Adjust max width for the search bar container
            >
              <div
                className="flex rounded-full border-[1px] overflow-hidden font-[sans-serif] relative w-full laptop:max-w-[90vw] md-mobile:max-w-[85vw] sm-mobile:max-w-[95vw] mobile:max-w-[100vw]"
                onClick={handleSearchBarClick}
              >
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search Something..."
                  className="flex-grow outline-none bg-white text-gray-600 text-sm px-6 py-3"
                  style={{
                    minWidth: "500px", // Set a larger minimum width for the search bar
                    maxWidth: "1100px", // Set a larger maximum width for responsiveness
                  }}
                />
                <div className="w-[1px] bg-gray-300 mx-1 mt-2 mb-2"></div>
                <button className="flex items-center justify-center">
                  <img
                    src="/icons/icons8-ai-32.png"
                    className="w-6 h-6"
                    alt="AI Icon"
                  />
                </button>
                <div className="w-[1px] h-[60%] bg-gray-300 mx-1 self-center"></div>
                <button
                  type="button"
                  className="flex items-center justify-center bg-[#0076fa] px-4 py-2 border-0"
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

              {/* Suggestions Dropdown */}
              {isDropdownOpen && suggestions.length > 0 && (
                <ul
                  className="absolute top-full left-0 bg-white border-[1px] border-gray-300 rounded-lg shadow-lg mt-2 w-full z-10"
                  style={{
                    listStyleType: "none",
                    padding: "0",
                  }}
                >
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="flex flex-row gap-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="gray"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                        {suggestion}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 flex-grow-0">
            {/* Existing Links */}
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 hidden lg:block py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Melayu
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 hidden lg:block py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex flex-row items-center justify-center">
                <p className="pr-1">3</p>
                <div className="flex items-center justify-center w-6 h-6 border-[0.5px] border-blue-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-blue-600"
                    style={{ fontSize: "16px", width: "16px", height: "16px" }}
                  />
                </div>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 lg:block hidden py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex flex-row items-center justify-center relative">
                <p className="pr-1">Journals</p>
                <div className="flex items-center justify-center w-6 h-6 relative">
                  <FontAwesomeIcon
                    icon={faMobileScreen}
                    className="text-blue-600 w-[20px] h-[20px]"
                  />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border border-white"></span>
                </div>
              </div>
            </a>

            {/* Adjusted Buttons */}
            <button
              onClick={toggleFilterSidebar}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-xs lg:px-1 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex flex-row items-center justify-center">
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
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isHeaderVisible}
              onClick={toggleHeader}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                className="text-blue-600 w-4 h-4"
              />
            </button>
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
            <div className="flex flex-row">
              <li className="flex flex-col items-center min-h-[60px] flex-grow">
                <div className="flex justify-between w-full h-full">
                  <div className="flex flex-col items-center bg-white bg-opacity-40 pl-2 pr-2 h-full pb-[14px] rounded-tl-md">
                    <p className="font-normal text-base text-center pt-2">
                      ALL
                    </p>
                    <span className="text-white font-light text-sm">
                      914,952
                    </span>
                  </div>
                </div>
              </li>

              <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
                <a
                  href="#journal-articles"
                  className="font-light text-sm text-center bg-white bg-opacity-40 pb-2  w-full rounded-tr-md"
                >
                  English
                </a>
                <span>
                  <p className="font-light text-xs text-center pt-1 lg:pt-[18px] pl-2 underline">
                    Advance Search
                  </p>
                </span>
              </li>
            </div>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#journal-articles"
                className="font-light text-sm text-center"
              >
                Journal <br />
                Articles
              </a>
              <span>
                <p className="font-light text-sm text-center pt-1 lg:pt-[4px] pb-1">
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
                <p className="font-light text-sm text-center pt-1 lg:pt-[4px] pb-1">
                  211,169
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#udlislamic-books"
                className="font-light text-sm text-center "
              >
                UDLislamic
                <br />
                Books
              </a>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#conferences"
                className="font-light text-sm text-center pb-2"
              >
                Conferences
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[10px]">
                  42,039
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#newspapers"
                className="font-light text-sm text-center pb-2"
              >
                Newspapers
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[10px]">
                  101,857
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a href="#books" className="font-light text-sm text-center pb-2">
                Books
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[10px]">0</p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#patents"
                className="font-light text-sm text-center pb-2"
              >
                Patents
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[10px]">251</p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#standards"
                className="font-light text-sm text-center pb-2"
              >
                Standards
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[10px]">
                  5,883
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#law-cases"
                className="font-light text-sm text-center pb-1"
              >
                Law
                <br />
                Cases
              </a>
              <span>
                <p className="font-light text-sm text-center lg:pt-[2px] pb-1">
                  57,587
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#monographic-serials"
                className="font-light text-sm text-center"
              >
                Monographic
                <br />
                Serials
              </a>
              <span>
                <p className="font-light text-sm text-center lg:pt-[6px] pb-1">
                  2,387
                </p>
              </span>
            </li>

            <li className="flex flex-col items-center pr-2 border-r-[0.2px] border-gray-400 min-h-[60px] flex-grow">
              <a
                href="#reference-works"
                className="font-light text-sm text-center pb-6"
              >
                Reference
                <br />
                Works
              </a>
            </li>

            <li className="flex flex-col items-center pr-2 flex-grow min-h-[60px]">
              <a
                href="#dataset"
                className="font-light text-sm text-center pb-2"
              >
                Dataset
              </a>
              <span>
                <p className="font-light text-sm text-center pt-[10px]">
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
