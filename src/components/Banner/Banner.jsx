/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Banner = ({ onSearch }) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = () => {
    const search = searchCategory.toLowerCase().trim();
    onSearch(search);
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-96 gap-6">
      <h1 className="text-3xl text-center font-bold max-w-xs md:max-w-6xl">
        I Grow By Helping People In Need
      </h1>
      <div>
        <div className="relative w-80 md:w-96">
          <input
            type="text"
            placeholder="Search here..."
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="input input-bordered h-10 w-full pl-4 text-sm rounded-md outline-none focus:outline-none border placeholder:text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-[#FF444A] text-white h-10 text-sm font-semibold px-5 absolute top-0 right-0 rounded-l-none rounded-r-md"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
