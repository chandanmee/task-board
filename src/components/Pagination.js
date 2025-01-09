import React from "react";

const Pagination = ({ currentPage, totalItems = 0, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / 10); // Assuming 10 tasks per page

  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Function to generate page numbers with ellipsis
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Total pages to display on either side of currentPage
    const ellipsis = "...";

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= maxPagesToShow) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
        pages.push(ellipsis);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - maxPagesToShow + 1) {
        pages.push(1);
        pages.push(ellipsis);
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(ellipsis);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(ellipsis);
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-6">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
        className={`px-4 py-2 bg-gray-200 rounded-l-lg font-medium text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="mx-2 flex items-center">
        {generatePageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={index}
                className="px-4 py-2 mx-1 font-medium text-gray-700"
              >
                ...
              </span>
            );
          }
          return (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 mx-1 rounded-lg font-medium text-gray-700 bg-white border-2 ${
                page === currentPage
                  ? "bg-blue-600 text-gray border-blue-600" // Active page styling
                  : "hover:bg-gray-200 border-gray-300"
              } transition duration-300 ease-in-out`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
        className={`px-4 py-2 bg-gray-200 rounded-r-lg font-medium text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
