import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { itemsInfo } from "../data";

const Hero = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    if (value.length > 1) {
      const filteredSuggestions = itemsInfo.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/categories/${id}`); // This assumes the URL pattern /food/:id for navigating to a food item detail page
    setSuggestions([]); // Optionally clear suggestions after navigation
    setSearchText(""); // Optionally clear the search input after navigation
  };

  // const handleSearchSelect = (title) => {
  //   setSearchText(title);
  //   setSuggestions([]);
  // };

  return (
    <div className="w-full bg-hero md:bg-cover md:bg-top bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1280px] font-sans mx-auto text-center lg:py-[320px] py-[250px] sm:px-5 px-2">
        <h1 className="lg:text-[48px] sm:text-[35px] text-[24px] font-normal">
          Best food waiting for your belly
        </h1>
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search food items"
            className="lg:w-[430px] sm:w-[350px] px-6 py-2 mt-4 rounded-3xl focus:outline-none"
          />
          <button className="button -ml-9">Search</button>
          <div className="absolute translate-x-[89%] mt-3 bg-white lg:w-[430px] sm:w-[350px] rounded-b-md shadow-lg">
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    // onClick={() => handleSearchSelect(item.title)}
                    onClick={() => handleSuggestionClick(item.id)}
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-10 h-10 object-cover rounded-full"
                      />
                      <div>
                        <p>
                          {item.title} - <small>{item.description}</small>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
