import React from "react";

const ChevronRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="black"
      className="bi bi-chevron-double-right animate-pulse w-10 h-10 md:w-10 md:h-10"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
      />
      <path
        fillRule="evenodd"
        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
};

export default ChevronRight;
