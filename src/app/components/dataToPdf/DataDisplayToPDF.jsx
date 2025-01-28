import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DataDisplayToPDF = ({ data, toggleChat, closeChat }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomInPercentage, setZoomInPercentage] = useState(10);
  const [zoomOutPercentage, setZoomOutPercentage] = useState(10);
  const contentRef = useRef(null);

  useEffect(() => {
    console.log("Received data:", data);
  }, [data]);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);

    const contentElement = contentRef.current;

    const originalStyle = {
      height: contentElement.style.height,
      overflow: contentElement.style.overflow,
    };

    contentElement.style.height = "auto";
    contentElement.style.overflow = "visible";

    const canvas = await html2canvas(contentElement, { scale: 2 });

    contentElement.style.height = originalStyle.height;
    contentElement.style.overflow = originalStyle.overflow;

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgData = canvas.toDataURL("image/png");
    const contentHeight = (canvas.height * pdfWidth) / canvas.width;

    const pagePadding = 10;

    if (contentHeight <= pdfHeight - pagePadding * 2) {
      pdf.addImage(imgData, "PNG", 0, pagePadding, pdfWidth, contentHeight);
    } else {
      let currentHeight = 0;

      while (currentHeight < canvas.height) {
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = Math.min(
          canvas.height - currentHeight,
          (pdfHeight - pagePadding * 2) * (canvas.width / pdfWidth)
        );

        const pageContext = pageCanvas.getContext("2d");

        pageContext.drawImage(
          canvas,
          0,
          currentHeight,
          canvas.width,
          pageCanvas.height,
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        const pageImgData = pageCanvas.toDataURL("image/png");
        const pageHeight = (pageCanvas.height * pdfWidth) / canvas.width;

        pdf.addImage(pageImgData, "PNG", 0, pagePadding, pdfWidth, pageHeight);

        currentHeight += pageCanvas.height;

        if (currentHeight < canvas.height) {
          pdf.addPage();
        }
      }
    }

    pdf.save("download.pdf");
    setIsDownloading(false);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => {
      const newZoom = Math.min(prevZoom + 0.1, 2);
      setZoomInPercentage(Math.round(newZoom * 10));
      setZoomOutPercentage(Math.round(newZoom * 10));
      return newZoom;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => {
      const newZoom = Math.max(prevZoom - 0.1, 0.5);
      setZoomInPercentage(Math.round(newZoom * 10));
      setZoomOutPercentage(Math.round(newZoom * 10)); // Keep zoom-out percentage same
      return newZoom;
    });
  };

  return (
    <div className="pdfHeight flex flex-col">
      {/* Main Content */}
      <div className="laptop:pl-20 laptop:pr-20 laptop:pt-4 mobile:pl-4 mobile:pr-4 mobile:pt-1 md-mobile:pl-4 sm-mobile:pl-4 md-mobile:pr-4 sm-mobile:pr-4 md-mobile:pt-1 sm-mobile:pt-1 bg-blue-50 flex-grow overflow-hidden">
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <main
            ref={contentRef}
            className="pl-12 pr-12 pt-12 bg-white"
            style={{
              height: "calc(105vh - 140px)",
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center top",
              overflow: "auto", // Allow scrolling
            }}
          >
            {/* Logo inside the main content area */}
            <div className="flex items-center mb-4 mt-12">
              <img
                src="/icons/future_logo.png"
                alt="Logo"
                className="w-50 h-10 mr-4"
              />
            </div>

            <hr className="flex-grow border-t-2 border-gray-800 mb-12" />
            {/* Title inside the main content area */}
            <h2 className="text-3xl font-bold mb-8">
              {data?.title || "No Data Title"}
            </h2>

            {/* Data content in a spread-out format */}
            <div className="space-y-6">
              {data ? (
                <>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-400">{data.year}</p>
                  </div>
                  <p className="text-gray-700">{data.abstract}</p>
                  <p className="text-gray-500">Authors: {data.authors}</p>
                </>
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Download and Zoom Controls */}
      <div className="flex flex-row justify-between w-full bg-white pt-8 pb-4 rounded-bl-md">
        <div className="flex gap-4 pl-8">
          <div className="flex flex-row items-center ">
            <p className="pl-2">{zoomInPercentage}%</p>
            <button
              onClick={handleZoomIn}
              className="text-gray-700 px-2 py-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-row items-center">
            <p>{zoomOutPercentage}%</p>
            <button
              onClick={handleZoomOut}
              className="text-gray-700 px-2 py-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Download Button (outside the content to not be included in the PDF) */}
        <div className="flex flex-row gap-1">
          <button
            onClick={toggleChat}
            className={"text-gray-700 px-6 py-3 rounded-md  cursor-allowed"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className={`text-gray-700 px-6 py-3 rounded-md ${
              isDownloading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayToPDF;
