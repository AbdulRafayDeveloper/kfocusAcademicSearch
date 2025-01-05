"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full">
      <header className="w-full pt-12 pb-4 flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8  flex justify-between">
          <div className="flex flex-row items-center">
            <div
              className="text-[#001727] text-normal font-semibold mb-4 self-start"
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(360deg)",
              }}
            >
              About Us
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products & Services
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center mx-8">
            <div
              className="text-[#001727] text-normal font-semibold mb-4 self-start"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(360deg)",
              }}
            >
              Support Center
            </div>
            <div className="flex flex-row gap-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    User Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Download Center
                  </a>
                </li>
              </ul>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Product Trails
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Feedbacks
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div
              className="text-[#001727] text-normal font-semibold mb-4 self-start"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(360deg)",
              }}
            >
              Partnerships
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products & Services
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center space-x-4 pl-8">
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

      <footer className="w-full flex flex-col">
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
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="h-8"
                      alt="Flowbite Logo"
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
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 text-sm font-medium text-white">
              <li>
                <a
                  href="#"
                  className="hover:underline font-light text-sm px-2 py-0.1 border-b md:border-b-0 md:border-r-[1px] border-white"
                >
                  © UDLedge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-light text-sm px-2 py-0.1 border-b md:border-b-0 md:border-r-[1px] border-white"
                >
                  Terms of Use & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-sm font-light px-2 py-0.1"
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
