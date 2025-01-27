"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full">
      <header className="w-full laptop:pt-6 laptop:pb-4 mobile:pt-4 mobile:pb-2 md-mobile:pt-4 sm-mobile:pt-4 md-mobile:pb-2 sm-mobile:pb-2 flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <div
              className="text-[#001727] font-semibold mb-4 md:mb-0 md:mr-2 text-normal"
              style={{
                writingMode: "horizontal-tb", // Default for mobile view
              }}
            >
              <span className="block md:hidden text-sm">About us</span>
              <span
                className="hidden md:block"
                style={{
                  writingMode: "vertical-rl", // Vertical text for medium and larger screens
                  transform: "rotate(360deg)",
                }}
              >
                About us
              </span>
            </div>
            <ul className="text-sm text-gray-600 laptop:space-y-2 mobile:space-y-0 md-mobile:space-y-0 sm-mobile:space-y-0">
              <li>
                <a
                  href="#"
                  className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                >
                  Products & Services
                </a>
              </li>
            </ul>
          </div>

          {/* Support Center Section */}
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0 mx-0 md:mx-8">
            <div
              className="text-[#001727] font-semibold mb-4 md:mb-0 md:mr-2 text-normal"
              style={{
                writingMode: "horizontal-tb", // Default for mobile view
              }}
            >
              <span className="block md:hidden mobile:text-sm md-mobile:text-sm sm-mobile:text-sm">
                Support Center
              </span>
              <span
                className="hidden md:block"
                style={{
                  writingMode: "vertical-rl", // Vertical text for medium and larger screens
                  transform: "rotate(360deg)",
                }}
              >
                Support Center
              </span>
            </div>
            <div className="flex flex-col md:flex-row laptop:gap-4 mobile:gap-0 md-mobile:gap-0 sm-mobile:gap-0">
              <ul className="text-sm text-gray-600 laptop:space-y-2 mobile:space-y-0 md-mobile:space-y-0 sm-mobile:space-y-0">
                <li>
                  <a
                    href="#"
                    className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                  >
                    Download Center
                  </a>
                </li>
              </ul>
              <ul className="text-sm text-gray-600 laptop:space-y-2 mobile:space-y-0 md-mobile:space-y-0 sm-mobile:space-y-0">
                <li>
                  <a
                    href="#"
                    className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                  >
                    Product Trails
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                  >
                    Feedbacks
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Partnerships Section */}
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <div
              className="text-[#001727] font-semibold mb-4 md:mb-0 md:mr-2 text-normal"
              style={{
                writingMode: "horizontal-tb", // Default for mobile view
              }}
            >
              <span className="block md:hidden mobile:text-sm md-mobile:text-sm sm-mobile:text-sm">
                Partnerships
              </span>
              <span
                className="hidden md:block"
                style={{
                  writingMode: "vertical-rl", // Vertical text for medium and larger screens
                  transform: "rotate(360deg)",
                }}
              >
                Partnerships
              </span>
            </div>

            <ul className="text-sm text-gray-600 laptop:space-y-2 mobile:space-y-0 md-mobile:space-y-0 sm-mobile:space-y-0">
              <li>
                <a
                  href="#"
                  className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline mobile:text-xs md-mobile:text-xs sm-mobile:text-xs"
                >
                  Products & Services
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-row justify-center md:justify-start items-center space-x-4 pl-20 mobile:space-x-2 mobile:pl-32 md-mobile:space-x-2 sm-mobile:space-x-2 md-mobile:pl-32 sm-mobile:pl-32">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="bg-blue-500 text-white p-2 rounded-full w-4 h-4 flex items-center justify-center"
              />
              <p className="text-xs">Facebook</p>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faTwitter}
                className="bg-blue-500 text-white p-2 rounded-full w-4 h-4 flex items-center justify-center"
              />
              <p className="text-xs">Twitter</p>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faWeixin}
                className="bg-blue-500 text-white p-2 rounded-full w-4 h-4 flex items-center justify-center"
              />
              <p className="text-xs">WeChat</p>
            </div>
          </div>
        </div>
      </header>

      <footer className="w-full flex flex-col ">
        <div className="bg-[#001727] w-full py-4">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between lg:pr-60 lg:pl-60 pr-10 pl-10">
            {/* Left Section */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex flex-row items-center">
                <div className="border-r-[1px] pr-4 flex justify-center items-center">
                  <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3"
                  >
                    <img
                      src="/images/udl_logo.png"
                      className="h-8"
                      alt="udl Logo"
                    />
                  </a>
                </div>
                <div className="flex flex-col pl-4">
                  <div className="border-b-[1px] pr-8">
                    <p className="text-white font-medium pb-1">
                      Citations Index
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-light">
                      Journal Articles, Proceedings & Patents
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <ul className="flex flex-col mobile:flex-row md-mobile:flex-row sm-mobile:flex-row space-y-2 md:space-y-0 md:space-x-2 text-sm font-medium text-white items-center">
              <li>
                <a
                  href="#"
                  className="hover:underline font-light text-sm mobile:text-xs md-mobile:text-xs sm-mobile:text-xs px-2 py-0.1  md:border-r-[1px] border-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  © UDLedge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-light text-sm px-2 py-0.1 mobile:text-xs  md:border-r-[1px] md-mobile:text-xs sm-mobile:text-xs border-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Terms of Use & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-sm mobile:text-xs md-mobile:text-xs sm-mobile:text-xs font-light px-2 py-0.1"
                >
                  Cookies Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
