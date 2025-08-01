import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNames } from "country-list";
import {
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Filters = ({ toggleFilterSidebar }) => {
  const [expandedFilters, setExpandedFilters] = useState({
    papers: false,
    method: false,
    journals: false,
    domains: false,
    country: false,
  });

  const toggleFilter = (category) => {
    setExpandedFilters((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  const [rating1, setRating1] = useState(4);
  const [rating2, setRating2] = useState(3);
  const [rating3, setRating3] = useState(2);
  const [rating4, setRating4] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [checkedDomains, setCheckedDomains] = useState([]);
  const [domains] = useState([
    "Agricultural, Food Sciences",
    "Art",
    "Biology",
    "Business",
    "Chemistry",
    "Computer Science",
    "Economics",
    "Education",
    "Engineering",
    "Environmental Science",
    "Geography",
    "Geology",
    "History",
    "Law",
    "Linguistics",
    "Materials Science",
    "Mathematics",
    "Medicine",
  ]);

  const filteredDomains = domains.filter((domain) =>
    domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (domain) => {
    setCheckedDomains((prevChecked) =>
      prevChecked.includes(domain)
        ? prevChecked.filter((d) => d !== domain)
        : [...prevChecked, domain]
    );
  };

  const countryNames = getNames();
  const [expandedCountryFilters, setCountryExpandedFilters] = useState({
    countries: false,
  });
  const [searchCountryTerm, setCountrySearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countryNames);
  const [checkedCountries, setCheckedCountries] = useState([]);

  const toggleCountryFilter = (filterName) => {
    setCountryExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleCountrySearch = (term) => {
    setCountrySearchTerm(term);
    const filtered = countryNames.filter((country) =>
      country.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  };
  const handleCountryCheckboxChange = (country) => {
    setCheckedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((item) => item !== country)
        : [...prev, country]
    );
  };

  return (
    <div className="p-4 bg-white z-[99999] h-screen overflow-auto shadow-lg">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="text-sm font-semibold">Apply Filters</div>
        <button onClick={toggleFilterSidebar} className="p-2 transition">
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>
      </div>

      {/* Paper Filter Section */}
      <div className="mb-4  border-b-[0.5px]  border-b-gray-300 pb-4">
        <button
          className="flex items-center justify-between w-full text-gray-800 font-medium text-sm hover:text-blue-600"
          onClick={() => toggleFilter("papers")}
        >
          <span>Papers</span>
          <FontAwesomeIcon
            icon={expandedFilters.papers ? faChevronUp : faChevronDown}
            className="ml-2 text-xs"
          />
        </button>

        {expandedFilters.papers && (
          <div className="mt-2 ">
            <p className="text-sm pt-2 pb-1">Published since</p>
            <div className="grid grid-cols-3 gap-2 ">
              {[
                "All",
                "2024",
                "2023",
                "2022",
                "2021",
                "2020",
                "2019",
                "2018",
                "2015",
                "2010",
                "2005",
                "2000",
                "1990",
              ].map((option) => (
                <button
                  key={option}
                  className={`text-sm text-gray-600 border rounded-md py-1 px-2 hover:bg-blue-600 hover:text-white focus:outline-none ${
                    option === "All" ? "bg-blue-100" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <label className="inline-flex w-full cursor-pointer items-center justify-between pt-2">
              <div>
                <span className="text-sm font-normal text-gray-900">
                  Open Access
                </span>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </label>

            <label className="inline-flex w-full cursor-pointer justify-between items-center pt-2">
              <div className="flex flex-row items-center">
                <div className="text-sm font-normal text-gray-900">
                  Ask Paper available
                </div>
                <div className="pl-1">
                  <span className="text-blue-600 p-[0.5] py-[0.5px] px-2 bg-blue-100 font-normal text-xs rounded-md">
                    Beta
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </label>

            <div className="relative pt-4">
              <span className=" text-sm font-normal text-gray-900">
                Citations ≥
              </span>
              <input
                type="number"
                min="1"
                placeholder="1"
                className="w-full py-1 px-4 pl-10 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Method Filter Section */}
      <div className="mb-4  border-b-[0.5px]  border-b-gray-300 pb-4">
        <button
          className="flex items-center justify-between w-full text-gray-800 font-medium text-sm hover:text-blue-600"
          onClick={() => toggleFilter("method")}
        >
          <div className="flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>Methods</div>
          </div>
          <FontAwesomeIcon
            icon={expandedFilters.method ? faChevronUp : faChevronDown}
            className="ml-2 text-xs"
          />
        </button>
        {expandedFilters.method && (
          <div className="mt-4 space-y-2 ">
            <div className="flex flex-row items-center pt-3 pb-3">
              <div className="text-sm font-semibold text-gray-900">
                Study types
              </div>
              <div className="pl-1">
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
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Science"
                className="text-green-600"
              />
              <div className="border border-[#3bcdaa] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/meta_analysis.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">Meta Analysis</span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Technology"
                className="text-green-600"
              />
              <div className="border border-[#3bcdaa] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/file-folder_3356685.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">
                  Systematic Review
                </span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Engineering"
                className="text-green-600"
              />
              <div className="border border-[#3bcdaa] rounded-md px-2 py-1 flex flex-row">
                <img src="/icons/rtc.png" className="w-5 h-5" alt="" />
                <span className="text-sm font-normal pl-2">RTC</span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Math" className="text-green-600" />
              <div className="border border-[#feba21] rounded-md px-2 py-1 flex flex-row">
                <img src="/icons/nonrtc.png" className="w-4 h-4" alt="" />
                <span className="text-sm font-normal pl-2">Non-RTC Trial</span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Math" className="text-green-600" />
              <div className="border border-[#feba21] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/search-book_18075456.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">
                  Observational Study
                </span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Math" className="text-green-600" />
              <div className="border border-[#feba21] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/learning_4185714.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">
                  Literature Review
                </span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Math" className="text-green-600" />
              <div className="border border-[#f06767] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/report_3029337.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">Case Report</span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Math" className="text-green-600" />
              <div className="border border-[#f06767] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/mouse_11259907.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">Animal Trial</span>
              </div>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Math" className="text-green-600" />
              <div className="border border-[#f06767] rounded-md px-2 py-1 flex flex-row">
                <img
                  src="/icons/bacteria_7407691.png"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="text-sm font-normal pl-2">In Vitro Trial</span>
              </div>
            </label>
            <div className="flex flex-row items-center pt-3 pb-3">
              <div className="text-sm font-semibold text-gray-900">
                Study details
              </div>
              <div className="pl-1">
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
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
            </div>
            <label className="inline-flex w-full cursor-pointer items-center justify-between ">
              <div>
                <span className="text-sm font-normal text-gray-900">
                  Controlled studies
                </span>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </label>

            <label className="inline-flex w-full cursor-pointer justify-between items-center ">
              <div className="flex flex-row items-center">
                <div className="text-sm font-normal text-gray-900">
                  Human studies
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </label>
            <div className="relative pt-1">
              <span className=" text-sm font-normal text-gray-900">
                Sample size ≥
              </span>
              <input
                type="number"
                min="1"
                placeholder="1"
                className="w-full py-1 px-4 pl-10 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Journals Filter Section */}
      <div className="mb-4 border-b-[0.5px]  border-b-gray-300 pb-4">
        <button
          className="flex items-center justify-between w-full text-gray-800 font-medium text-sm hover:text-blue-600"
          onClick={() => toggleFilter("journals")}
        >
          <span>Journals</span>
          <FontAwesomeIcon
            icon={expandedFilters.journals ? faChevronUp : faChevronDown}
            className="ml-2 text-xs"
          />
        </button>

        {expandedFilters.journals && (
          <div>
            <div className="flex flex-row items-center pt-3 pb-3">
              <div className="text-xs font-semibold text-gray-900">
                SJR quartile ratings
              </div>
              <div className="pl-1">
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
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
            </div>
            {/* First Set of Progress Bars */}
            <div className="flex items-center space-x-4 mb-2 border-[0.5px] border-gray-300 p-2 rounded-lg">
              {/* Label */}
              <p className="text-sm font-normal">Q1</p>

              {/* Progress Bars */}
              <div className="flex space-x-2 w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating1 >= 1 ? "bg-[#3bcdaa]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating1 >= 2 ? "bg-[#3bcdaa]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating1 >= 3 ? "bg-[#3bcdaa]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating1 === 4 ? "bg-[#3bcdaa]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Second Set of Progress Bars */}
            <div className="flex items-center space-x-4 mb-2 border-[0.5px] border-gray-300 p-2 rounded-lg">
              {/* Label */}
              <p className="text-sm font-normal">Q2</p>

              {/* Progress Bars */}
              <div className="flex space-x-2 w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating2 >= 1 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating2 >= 2 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating2 >= 3 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating2 === 4 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Third Set of Progress Bars */}
            <div className="flex items-center space-x-4 mb-2 border-[0.5px] border-gray-300 p-2 rounded-lg">
              {/* Label */}
              <p className="text-sm font-normal">Q3</p>

              {/* Progress Bars */}
              <div className="flex space-x-2 w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating3 >= 1 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating3 >= 2 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating3 >= 3 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating3 === 4 ? "bg-[#feba21]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Fourth Set of Progress Bars */}
            <div className="flex items-center space-x-4 mb-2 border-[0.5px] border-gray-300 p-2 rounded-lg">
              {/* Label */}
              <p className="text-sm font-normal">Q4</p>

              {/* Progress Bars */}
              <div className="flex space-x-2 w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating4 >= 1 ? "bg-[#f06767]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating4 >= 2 ? "bg-[#f06767]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating4 >= 3 ? "bg-[#f06767]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${
                      rating4 === 4 ? "bg-[#f06767]" : "bg-gray-300"
                    } h-2.5 rounded-full`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Domains Filter Section */}
      <div className="mb-4 border-b-[0.5px] border-b-gray-300 pb-4 ">
        {/* Toggle Button */}
        <button
          className="flex items-center justify-between w-full text-gray-800 font-medium text-sm hover:text-blue-600"
          onClick={() => toggleFilter("domains")}
        >
          <span>Domains</span>
          <FontAwesomeIcon
            icon={expandedFilters.domains ? faChevronUp : faChevronDown}
            className="ml-2 text-xs"
          />
        </button>

        {/* Search and Checkboxes */}
        {expandedFilters.domains && (
          <div className="pt-4">
            {/* Search Field */}
            <input
              type="text"
              placeholder="Search domains..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-1 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Checkboxes */}
            <div>
              <ul className="space-y-2">
                {filteredDomains.map((domain) => (
                  <li key={domain}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        checked={checkedDomains.includes(domain)}
                        onChange={() => handleCheckboxChange(domain)}
                      />
                      <span className="text-sm text-gray-600">{domain}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Country Filter Section */}
      <div className=" border-b-[0.5px] border-b-gray-300 mb-12 pb-4">
        <button
          className="flex items-center justify-between w-full text-gray-800 font-medium text-sm hover:text-blue-600"
          onClick={() => toggleCountryFilter("countries")}
        >
          <div className="flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>Country</div>
          </div>
          <FontAwesomeIcon
            icon={
              expandedCountryFilters.countries ? faChevronUp : faChevronDown
            }
            className="ml-2 text-xs"
          />
        </button>

        {/* Search and Checkboxes */}
        {expandedCountryFilters.countries && (
          <div className="pt-4">
            {/* Search Field */}
            <input
              type="text"
              placeholder="Search countries..."
              value={searchCountryTerm}
              onChange={(e) => handleCountrySearch(e.target.value)}
              className="w-full px-3 py-1 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Checkboxes */}
            <div>
              <ul className="space-y-2">
                {filteredCountries.map((country) => (
                  <li key={country}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        checked={checkedCountries.includes(country)}
                        onChange={() => handleCountryCheckboxChange(country)}
                      />
                      <span className="text-sm text-gray-600">{country}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <footer className="absolute bottom-0 bg-blue-100 w-full left-0 p-4">
        <div className="flex flex-row justify-between">
          <button>
            <p className="text-sm underline pb-1">Reset filters</p>
          </button>
          <button className="p-2 rounded-full bg-blue-600 text-white text-sm px-4">
            Apply
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Filters;
