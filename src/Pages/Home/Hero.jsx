import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-32">
      <h1 className="md:text-5xl text-3xl text-center text-gray-800 md:leading-snug">
        Discover & Share Your <br /> Favorite Recipes with
        <span className="text-primary"> TasteBook</span>
      </h1>
      <p className="max-w-[700px] text-center mx-auto my-7 text-gray-500">
        Welcome to TasteBook, your go-to app for finding and sharing delicious
        recipes. Browse, save, and share your favorite dishes with our vibrant
        community of food lovers. Join us and elevate your cooking game today!
      </p>
      <form className="max-w-[700px] mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search Recipes..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
