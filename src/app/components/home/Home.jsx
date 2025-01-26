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
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import SidebarFilters from "../sideBar/Sidebar";
import { useState, useEffect } from "react";
import ListView from "../content/List";
import GridView from "../content/Grid";
import Filters from "../filters/Filters";
import AskPaper from "../askPaper/AskPaper";
import MoreFilters from "../moreFilters/MoreFilters";
import Loader from "../loader/Loader";

const HomePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState("filter");
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [isAskPaperOpen, setAskPaperOpen] = useState(false);

  const [isGridVisible, setIsGridVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const showGridView = () => setIsGridVisible(true);
  const showListView = () => setIsGridVisible(false);
  const [showPdf, setShowPdf] = useState(false);
  const [pdfIndex, setPdfIndex] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Date (newest)");
  const [moveUp, setMoveUp] = useState(false);

  const toggleUp = () => {
    setMoveUp(!moveUp);
    console.log(moveUp);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    setIsDropdownOpen(false);
  };

  const sortOptions = [
    "Date (newest)",
    "Date (oldest)",
    "Relevance",
    "Popularity",
  ];

  const togglePdf = (index) => {
    setShowPdf(!showPdf);
    setPdfIndex(index);
    console.log("document number:", index);
  };

  console.log("show pdf: ", showPdf);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen((prevState) => !prevState);
  };

  const [selectedPaperIndex, setSelectedPaperIndex] = useState(false);

  const [askThisPaper, setAskThisPaper] = useState(false);

  const toggleAskPaper = (index) => {
    console.log(index);
    setAskPaperOpen(true);
    setAskThisPaper(true);
    setSelectedPaperIndex(index);
  };

  const [selectedFilter, setSelectedFilter] = useState(false);
  const [selectedFilterindex, setSelectedFilterIndex] = useState(false);
  const toggleSideFilter = (index) => {
    console.log(index);
    setSelectedFilter(!selectedFilter);
    setSelectedFilterIndex(index);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10); // Default value

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false); // Close the dropdown after selection
  };
  const filterCategories = [
    {
      name: "Date Range",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Last ${index + 1} years`,
        value: index + 1,
      })),
    },
    {
      name: "Content Type",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Content Type ${index + 1}`,
        value: index + 1,
      })),
    },
    {
      name: "Quick Filters",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Quick Filter ${index + 1}`,
        value: index + 1,
      })),
    },
    {
      name: "Publication Years",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `${2023 - index}`,
        value: 2023 - index,
      })),
    },
    {
      name: "Keywords",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Keyword ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "KeyWords Plus",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Keyword Plus ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Research Areas",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Area ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Subject Area / Disciplines",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Subject ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Sustainable Development Goals",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Goal ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Source Title",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Source ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Source Type",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Source Type ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Publisher",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Publisher ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Author(s)",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Author ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Institute / Affiliations",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Institute ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Funder",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Funder ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Country/Territory",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Country ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "MeSH Heading",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `MeSH Heading ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Chemical Substance",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Substance ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Language",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Language ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Article Status",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Article Status ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
    {
      name: "Top Institutions Logo Grid",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Institution ${index + 1}`,
        value: `${index + 1}`,
      })),
    },
  ];

  const categoryMatch = filterCategories.find(
    (category, index) => category.name === selectedFilterindex
  );
  console.log("categoryMatch:", categoryMatch);

  let selectedFilterOptions =
    selectedFilterindex !== null ? categoryMatch?.options : [];
  console.log("selectedFilterOptions:", selectedFilterOptions);

  console.log("selected filer: ", selectedFilterOptions);
  if (Array.isArray(selectedFilterOptions)) {
    selectedFilterOptions = [...selectedFilterOptions, selectedFilterindex];
  } else {
    selectedFilterOptions = [selectedFilterindex];
  }

  const cancerResearchPapers = [
    {
      id: 1,
      title: "Cancer Immunotherapy: The Next Frontier",
      authors: "Dr. Alex Martinez, Dr. Lisa Green",
      year: 2024,
      introduction:
        "This paper delves into the role of immunotherapy in treating cancer, highlighting new advancements in personalized cancer treatment.",
      summary:
        "An analysis of the latest developments in cancer immunotherapy and its potential to revolutionize cancer treatment by boosting the body’s immune response.",
    },
    {
      id: 2,
      title: "Genetic Mutations and Cancer Development",
      authors: "Dr. Emily White, Dr. James Scott",
      year: 2023,
      introduction:
        "This study focuses on the link between genetic mutations and the onset of various cancers, with an emphasis on genetic screening for early detection.",
      summary:
        "A comprehensive overview of how genetic mutations contribute to the development of cancers like breast and lung cancer, and how genetic screening can aid early detection.",
    },
    {
      id: 3,
      title: "Advances in Early Cancer Detection",
      authors: "Dr. Rachel Black, Dr. Steven Clark",
      year: 2022,
      introduction:
        "This research explores recent technological innovations that enhance early detection of cancers, improving survival rates through earlier intervention.",
      summary:
        "Exploring the cutting-edge tools and techniques used to detect cancer at its earliest stages, including imaging technologies and biomarker research.",
    },
    {
      id: 4,
      title: "Cancer and Lifestyle Factors: Prevention and Risk Reduction",
      authors: "Dr. Olivia Brown, Dr. Matthew Lewis",
      year: 2025,
      introduction:
        "Focusing on how lifestyle choices such as diet, exercise, and environmental factors can impact the likelihood of developing cancer, this paper aims to highlight prevention strategies.",
      summary:
        "Examining the significant role of lifestyle factors in cancer prevention, with recommendations for individuals to reduce their cancer risk through healthier choices.",
    },
  ];

  const [showOptions, setShowOptions] = useState(false); // State for mobile options visibility

  const toggleOptions = () => {
    setShowOptions((prevState) => !prevState); // Toggle visibility
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen flex-grow ">
      <Header toggleFilterSidebar={toggleFilterSidebar} />
      <div
        className={`absolute top-0 right-0 z-40 bg-white transition-transform duration-300 ${
          isFilterSidebarOpen ? "translate-x-0 w-72" : "hidden"
        }`}
      >
        <Filters toggleFilterSidebar={toggleFilterSidebar} />
      </div>
      <div
        className={`absolute top-[138px] right-0 z-40 bg-white transition-transform duration-300 ${
          selectedFilter
            ? "translate-x-0 laptop:w-[730px] mobile:w-[300px] md-mobile:w-[300px] sm-mobile:w-[300px]"
            : "hidden"
        }`}
      >
        <MoreFilters
          ListOfFilters={selectedFilterOptions}
          toggleSideFilter={toggleSideFilter}
        />
      </div>

      <div className="flex flex-grow ">
        <div className="laptop:w-[5%] mobile:w-[13%] md-mobile:w-[13%] sm-mobile:w-[13%] pt-[0.5px] overflow-y-auto flex flex-col">
          <a
            href="#"
            className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700 hover:bg-white px-4 py-4 md-mobile:px-0 sm-mobile:px-0 md-mobile:py-4 sm-mobile:py-4 transition duration-200 "
            onClick={() => {
              toggleSidebar();
              changeActiveCategory("filter");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </a>
          <a
            href="#"
            className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 md-mobile:px-0 sm-mobile:px-0 md-mobile:py-4 sm-mobile:py-4 ${
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
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </a>

          <a
            href="#"
            className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 md-mobile:px-0 sm-mobile:px-0 md-mobile:py-4 sm-mobile:py-4 ${
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
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700  hover:bg-white px-4 py-4 md-mobile:px-0 sm-mobile:px-0 md-mobile:py-4 sm-mobile:py-4 transition duration-200 "
            onClick={() => changeActiveCategory("info")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-xl text-gray-800 hover:text-blue-700  hover:bg-white px-4 py-4 md-mobile:px-0 sm-mobile:px-0 md-mobile:py-4 sm-mobile:py-4 transition duration-200 "
            onClick={() => changeActiveCategory("ellipsis")}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </a>
        </div>

        <div className="flex flex-col mobile:w-[88%] md-mobile:w-[88%] sm-mobile:w-[88%] laptop:w-full">
          <div className="flex w-full">
            {/* Sidebar */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isSidebarVisible
                  ? "laptop:w-[300px] mobile:w-[200px] md-mobile:w-[200px] sm-mobile:w-[200px] mobile:z-[9999] "
                  : "laptop:w-0 mobile:w-0"
              }  laptop:block laptop:static mobile:fixed mobile:top-10 mobile:left-12 md-mobile:top-10 sm-mobile:top-10 md-mobile:left-12 sm-mobile:left-12 `}
            >
              <SidebarFilters
                activeCategory={activeCategory}
                changeActiveCategory={changeActiveCategory}
                toggleSideFilter={toggleSideFilter}
                className="overflow-y-scroll"
                filterCategories={filterCategories}
              />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-grow h-screen laptop:flex mobile:overflow-y-auto md-mobile:overflow-y-auto sm-mobile:overflow-y-auto">
              {/* Header */}
              <div
                className={`bg-white pt-2 pb-2 pr-1 pl-[8.5px] flex flex-row justify-between items-center md-mobile:overflow-y-auto sm-mobile:overflow-y-auto ${
                  showPdf ? "hidden" : ""
                }`}
              >
                {/* Left Section */}
                <div className="flex flex-row items-center flex-shrink-0 space-x-2">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    className="text-[#0076fa] laptop:pr-1 mobile:pr-0 md-mobile:pr-0 sm-mobile:pr-0"
                    style={{
                      fontSize: "16px",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span className="font-normal laptop:block laptop:text-sm mobile:text-xs pr-4 flex-shrink-0 md-mobile:text-xs sm-mobile:text-xs">
                    Analyze search results
                  </span>
                  <span className="text-blue-600 p-[0.5] py-[0.5px] px-2 bg-blue-200 font-normal text-xs flex-shrink-0 mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:block tablet:block">
                    Search History
                  </span>
                </div>

                {/* Right Section */}
                <div className="flex flex-row items-center laptop:space-x-4 mobile:space-x-0 md-mobile:space-x-0 sm-mobile:space-x-0">
                  {/* Sort on Section */}
                  <div className="relative flex flex-row items-center pr-4 space-x-2 mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:flex">
                    <p className="text-xs whitespace-nowrap">Sort on:</p>
                    <button
                      className="flex items-center space-x-1 text-cyan-700 text-xs whitespace-nowrap focus:outline-none"
                      onClick={toggleDropdown}
                    >
                      <span>{selectedSort}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="p-1 bg-[#0076fa] text-white text-xs rounded-sm"
                        style={{
                          fontSize: "12px",
                          width: "12px",
                          height: "12px",
                        }}
                      />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full mt-1 bg-white rounded-lg shadow-lg border-[0.5px] border-gray-300 z-[9999] w-40">
                        <ul className="text-xs">
                          {sortOptions.map((option, index) => (
                            <li
                              key={index}
                              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                                selectedSort === option ? "font-semibold" : ""
                              }`}
                              onClick={() => handleSortChange(option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Total Section */}
                  <div className="flex flex-row items-center laptop:space-x-2 mobile:space-x-1 md-mobile:space-x-1 sm-mobile:space-x-1">
                    <p className="laptop:text-xs mobile:text-xs md-mobile:text-xs sm-mobile:text-xs text-gray-700 whitespace-nowrap ">
                      Total:
                    </p>
                    <p className="text-blue-700 text-xs whitespace-nowrap">
                      1,525,452
                    </p>
                    <p className="laptop:text-xs laptop:block text-gray-700 whitespace-nowrap mobile:hidden md-mobile:hidden sm-mobile:hidden">
                      articles
                    </p>
                  </div>

                  {/* Pagination Section */}
                  <div className="flex flex-row items-center laptop:pl-4 mobile:pl-2 md-mobile:pl-2  sm-mobile:pl-2  laptop:space-x-2 mobile:space-x-1 md-mobile:space-x-1 sm-mobile:space-x-1">
                    <p className="text-xs whitespace-nowrap">2/2600</p>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="p-1 bg-gray-100 text-gray-700 text-xs border-[0.5px] rounded-sm laptop:w-[14px] laptop:h-[14px]"
                    />
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="p-1 bg-gray-100 text-gray-700 text-xs border-[0.5px] rounded-sm laptop:w-[14px] laptop:h-[14px]"
                    />
                  </div>
                </div>
              </div>

              {/* Fixed Size Content Area pb-2*/}
              <div className="flex-1 pr-2 pl-2 w-full mx-auto h-screen">
                <nav className="mb-1">
                  <div
                    className={` ${
                      showPdf
                        ? "hidden"
                        : "pt-1 flex flex-row justify-between items-center space-x-2 mobile:overflow-y-auto md-mobile:overflow-y-auto sm-mobile:overflow-y-auto"
                    }`}
                  >
                    {/* Left Section */}
                    <div className="flex items-center laptop:space-x-2 mobile:space-x-1 md-mobile:space-x-1 sm-mobile:space-x-1">
                      <input
                        type="checkbox"
                        id="analyzeCheckbox"
                        className="laptop:w-4 laptop:h-4 mobile:w-2 mobile:h-2 accent-blue-600 cursor-pointer md-mobile:w-2 sm-mobile:w-2 md-mobile:h-2 sm-mobile:h-2"
                      />
                      <span className="font-normal text-xs text-[#0076fa]">
                        All
                      </span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-[#017fba] mobile:text-xs md-mobile:text-xs sm-mobile:text-xs laptop:w-[16px] laptop:h-[16px]"
                      />
                      <span className="font-normal text-xs text-gray-600">
                        Export
                      </span>
                      <span className="font-normal text-xs text-gray-600">
                        Download
                      </span>
                      <span className="font-normal text-xs mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:block  text-gray-600">
                        View citation overview
                      </span>
                      <span className="font-normal text-gray-600 mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:block text-xs border-r border-gray-600 laptop:pr-2">
                        Save to list
                      </span>

                      {/* Desktop Icons */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:block"
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
                        className="size-4 mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:block"
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
                        className="size-4 mobile:hidden md-mobile:hidden sm-mobile:hidden laptop:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>

                      {/* Mobile Button for toggling options */}
                      <button
                        className="mobile:block md-mobile:block sm-mobile:block laptop:hidden text-xs text-[#017fba] "
                        onClick={toggleOptions}
                      >
                        {showOptions ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Mobile-specific options */}
                      {showOptions && (
                        <div
                          className="laptop:hidden mt-2 mobile:flex mobile:flex-row mobile:space-x-2 mobile:mb-1 
                        md-mobile:flex sm-mobile:flex
                        md-mobile:flex-row sm-mobile:flex-row
                        md-mobile:space-x-2 sm-mobile:space-x-2
                        md-mobile:mb-1 sm-mobile:mb-1"
                        >
                          <span className="font-normal text-xs text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                              />
                            </svg>
                          </span>
                          <span className="font-normal text-xs text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                              />
                            </svg>
                          </span>
                          <span className="font-normal text-xs text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                              />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Right Section */}
                    <div className="flex flex-row items-center space-x-4">
                      {/* Overall Dropdown */}
                      <div className="flex items-center space-x-1 laptop:flex mobile:hidden md-mobile:hidden sm-mobile:hidden">
                        <p className="text-xs text-blue-600">Overall</p>
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          className="text-blue-600 text-xs"
                        />
                      </div>

                      {/* Records/Page Dropdown */}
                      <div className="flex items-center space-x-1">
                        <p className="text-xs text-gray-700 laptop:block mobile:hidden md-mobile:hidden sm-mobile:hidden">
                          Records/Page
                        </p>
                        <div className="relative mobile:pb-1 md-mobile:pb-1 sm-mobile:pb-1">
                          <button
                            className="flex items-center bg-gray-50 border border-gray-300 rounded laptop:px-2 laptop:py-1 mobile:px-[0.5px] mobile:py-[2px] text-xs text-blue-700 hover:bg-gray-200 md-mobile:px-[0.5px] sm-mobile:px-[0.5px] md-mobile:py-[2px] sm-mobile:py-[2px]"
                            type="button"
                            onClick={handleToggle}
                          >
                            {selectedValue}
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
                          {isOpen && (
                            <ul className="fixed mt-1 bg-white border border-gray-300 rounded shadow-lg text-gray-700 text-xs w-[50px] z-[999999]">
                              {[10, 20, 50, 100].map((value) => (
                                <li
                                  key={value}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => handleSelect(value)}
                                >
                                  {value}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Layout Options */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            showGridView();
                            setAskPaperOpen(false);
                            setAskThisPaper(false);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faTh}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                        </button>

                        {/* Button to show List View */}
                        <button
                          onClick={() => {
                            showListView();
                            setAskPaperOpen(false);
                            setAskThisPaper(false);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faListUl}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setAskPaperOpen(true);
                            setAskThisPaper(true);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faGripLinesVertical}
                            className="p-1 bg-gray-100 text-gray-700 text-xs border rounded cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
                <div>
                  <div className="w-full">
                    {isAskPaperOpen ? (
                      <AskPaper
                        selectedPaper={cancerResearchPapers[selectedPaperIndex]}
                      />
                    ) : isGridVisible ? (
                      <GridView
                        selectedValue={selectedValue}
                        moveUp={moveUp}
                        toggleUp={toggleUp}
                      />
                    ) : showPdf ? (
                      <PdfViewer index={pdfIndex} togglePdf={togglePdf} />
                    ) : (
                      <ListView
                        toggleAskPaper={toggleAskPaper}
                        selectedValue={selectedValue}
                        togglePdf={togglePdf}
                        moveUp={moveUp}
                        toggleUp={toggleUp}
                      />
                    )}
                  </div>

                  <footer
                    className={`bg-white z-10 text-gray-800 mt-auto flex flex-col justify-center items-center relative p-4 ${
                      isSidebarVisible ? "w-full" : "w-full"
                    } ${askThisPaper ? "hidden" : "w-full"}
  ${showPdf ? "hidden" : "w-full"}`}
                  >
                    <nav
                      aria-label="Page navigation example"
                      className="w-full"
                    >
                      <ul className="flex flex-wrap items-center justify-center space-x-2 space-y-2 h-auto text-base">
                        <li className="pt-2">
                          <a
                            href=""
                            className="flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 laptop:text-normal  laptop:text-normal laptop:px-4 laptop:h-10  mobile:text-sm mobile:px-2 mobile:h-6
                            md-mobile:text-sm sm-mobile:text-sm
                            md-mobile:px-2 sm-mobile:px-2
                            md-mobile:h-6 sm-mobile:h-6"
                          >
                            First
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 laptop:text-normal  laptop:text-normal laptop:px-4 laptop:h-10  mobile:text-sm mobile:px-2 mobile:h-6
                             md-mobile:text-sm sm-mobile:text-sm
                            md-mobile:px-2 sm-mobile:px-2
                            md-mobile:h-6 sm-mobile:h-6"
                          >
                            Prev
                          </a>
                        </li>
                        {/* Page numbers */}
                        {Array.from({ length: 9 }, (_, index) => (
                          <li key={index}>
                            <a
                              href=""
                              className={`flex items-center justify-center leading-tight ${
                                index === 0
                                  ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                              } laptop:text-normal laptop:px-4 laptop:h-10  mobile:text-sm mobile:px-2 mobile:h-6  md-mobile:text-sm sm-mobile:text-sm
                            md-mobile:px-2 sm-mobile:px-2
                            md-mobile:h-6 sm-mobile:h-6`}
                            >
                              {index + 1}
                            </a>
                          </li>
                        ))}
                        <li>
                          <a
                            href=""
                            className="flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 laptop:text-normal  laptop:text-normal laptop:px-4 laptop:h-10  mobile:text-sm mobile:px-2 mobile:h-6  md-mobile:text-sm sm-mobile:text-sm
                            md-mobile:px-2 sm-mobile:px-2
                            md-mobile:h-6 sm-mobile:h-6"
                          >
                            Next
                          </a>
                        </li>
                        {/* Arrow Up button in the same row */}
                        <li className="flex items-center">
                          <button
                            onClick={toggleUp}
                            className="flex items-center justify-center rounded-md bg-[#0076fa] text-white shadow-md hover:bg-[#005bb5] laptop:text-normal laptop:px-3 laptop:h-8  mobile:text-sm mobile:px-2 mobile:h-6  md-mobile:text-sm sm-mobile:text-sm
                            md-mobile:px-2 sm-mobile:px-2
                            md-mobile:h-6 sm-mobile:h-6"
                          >
                            <FontAwesomeIcon icon={faArrowUp} />
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
