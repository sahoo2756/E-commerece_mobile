import React, { useState } from "react";
import "./basic.css"

function ProjectSearchBox() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search action with the query
    console.log("Searching for:", query);
    // Add your search logic here
  };

  return (
    // flex apply on form element in .css current directory file
    <form onSubmit={handleSubmit} className="flex relative mt-20 mb-5 w-[40%] m-auto border-2 border-purple-600 rounded-md py-2">
        {/* input feild having py-1 because its nees to search btn left border will npt show full that's why input py-3 . I have give py-2 to form main wrapper and py-1 to input for adjustment.*/}
      <input
        type="text"
        id="inputField"
        className="w-[100%] bg-transparent px-4 py-1 text-lg outline-none focus:border-purple-600  placeholder-transparent"
        placeholder="Enter Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <label
        htmlFor="inputField"
        className={`absolute  left-4 transition-all duration-200 ease-in-out ${
          query
            ? "-top-3 text-sm bg-green-600 text-white px-1"
            : "top-3 text-lg text-gray-500"
        }`}
      >
        Enter Name
      </label>
      <button
        type="submit"
        className="ProjectSearh_SearchBtnCustomCss px-4"
      >
        Search
      </button>
    </form>
  );
}

export default ProjectSearchBox;
