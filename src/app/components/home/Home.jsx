"use client";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faArrowAltCircleLeft,
  faSe,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/12 p-4 overflow-y-auto">
            <p></p>
          </div>

          {/* Right Wide Column */}
          <div className="w-11/12 bg-white p-4 overflow-y-auto"></div>
        </div>
      </div>

      {/* Footer Below (Visible After Scrolling) */}
      <Footer />
    </>
  );
};

export default HomePage;
