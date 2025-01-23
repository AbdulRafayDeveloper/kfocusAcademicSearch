"use client";
import Header from "../../components/header/Header";
//import Footer from "../../components/header/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import SidebarFilters from "../../components/sideBar/Sidebar";
import { useState, useEffect } from "react";
import Filters from "../../components/filters/Filters";
import MoreFilters from "../../components/moreFilters/MoreFilters";
import Loader from "../../components/loader/Loader";

const page = ({ params }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState();
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen((prevState) => !prevState);
  };

  const [selectedFilter, setSelectedFilter] = useState(false);
  const [selectedFilterindex, setSelectedFilterIndex] = useState(false);
  const toggleSideFilter = (index) => {
    console.log(index);
    setSelectedFilter(!selectedFilter);
    setSelectedFilterIndex(index);
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
        value: `keyword_${index + 1}`,
      })),
    },
    {
      name: "KeyWords Plus",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Keyword Plus ${index + 1}`,
        value: `keyword_plus_${index + 1}`,
      })),
    },
    {
      name: "Research Areas",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Area ${index + 1}`,
        value: `area_${index + 1}`,
      })),
    },
    {
      name: "Subject Area / Disciplines",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Subject ${index + 1}`,
        value: `subject_${index + 1}`,
      })),
    },
    {
      name: "Sustainable Development Goals",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Goal ${index + 1}`,
        value: `goal_${index + 1}`,
      })),
    },
    {
      name: "Source Title",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Source ${index + 1}`,
        value: `source_${index + 1}`,
      })),
    },
    {
      name: "Source Type",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Source Type ${index + 1}`,
        value: `source_type_${index + 1}`,
      })),
    },
    {
      name: "Publisher",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Publisher ${index + 1}`,
        value: `publisher_${index + 1}`,
      })),
    },
    {
      name: "Author(s)",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Author ${index + 1}`,
        value: `author_${index + 1}`,
      })),
    },
    {
      name: "Institute / Affiliations",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Institute ${index + 1}`,
        value: `institute_${index + 1}`,
      })),
    },
    {
      name: "Funder",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Funder ${index + 1}`,
        value: `funder_${index + 1}`,
      })),
    },
    {
      name: "Country/Territory",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Country ${index + 1}`,
        value: `country_${index + 1}`,
      })),
    },
    {
      name: "MeSH Heading",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `MeSH Heading ${index + 1}`,
        value: `mesh_${index + 1}`,
      })),
    },
    {
      name: "Chemical Substance",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Substance ${index + 1}`,
        value: `substance_${index + 1}`,
      })),
    },
    {
      name: "Language",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Language ${index + 1}`,
        value: `language_${index + 1}`,
      })),
    },
    {
      name: "Article Status",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Article Status ${index + 1}`,
        value: `article_status_${index + 1}`,
      })),
    },
    {
      name: "Top Institutions Logo Grid",
      options: Array.from({ length: 20 }, (_, index) => ({
        label: `Institution ${index + 1}`,
        value: `institution_${index + 1}`,
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
    <div className="flex flex-col max-h-screen ">
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
          selectedFilter ? "translate-x-0 w-[730px]" : "hidden"
        }`}
      >
        <MoreFilters
          ListOfFilters={selectedFilterOptions}
          toggleSideFilter={toggleSideFilter}
        />
      </div>

      <div className="flex flex-grow overflow-">
        <div className="w-1/16 pt-[0.5px] overflow-y-auto flex flex-col ">
          <a
            href="#chevron"
            className="flex items-center justify-center text-xl text-gray-900 hover:text-blue-700 hover:bg-white px-4 py-4 transition duration-200 "
            onClick={() => {
              toggleSidebar();
              changeActiveCategory();
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
            href="#filter"
            className={`flex items-center justify-center text-xl text-gray-900 px-4 py-4 transition duration-200 ${
              activeCategory === "filter"
                ? "bg-white"
                : "hover:bg-white hover:text-blue-700"
            }`}
            onClick={() => changeActiveCategory()}
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
            href="#ellipsis"
            className="flex items-center justify-center text-xl text-gray-800 hover:text-blue-700  hover:bg-white px-4 py-4 transition duration-200 "
            onClick={() => changeActiveCategory("ellipsis")}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </a>
        </div>

        <div className="flex w-full flex-col ">
          <div className="flex w-full">
            {/* Sidebar */}
            <div
              className={`${
                isSidebarVisible ? "w-[300px]" : "w-0"
              } transition-all duration-300 overflow-hidden `}
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
            <div className="flex flex-col flex-grow h-screen"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
