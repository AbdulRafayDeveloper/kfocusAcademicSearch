import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img
        src="/icons/future_logo.png"
        alt="Loading"
        className="heartbeat h-12 sm:h-8 ml-4 animate-heartbeat"
      />
    </div>
  );
};

export default Loader;
