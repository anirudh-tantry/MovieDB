import React, { useEffect, useState } from "react";
import "boxicons";
import axios from "../api/axios";
import request from "../api/request";
import { Link } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const resetInputValue = () => setInputValue("");

  useEffect(() => {
    const searchData = async () => {
      try {
        const search = await axios.get(request.Search(inputValue));
        const data = search.data.results.filter((data) => {
          return data.media_type !== "person";
        });
        setSearchData(data);
        console.log(data);
      } catch (err) {
        if (err.response) {
          setSearchData([]);
        }
      }
    };
    searchData();
  }, [inputValue]);

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        className="search-box"
        placeholder="Search...."
        onChange={(e) => inputChangeHandler(e)}
        value={inputValue}
      />
      <box-icon
        class="search-icon"
        size="sm"
        color="white"
        name="search"
      ></box-icon>

      {searchData.length > 0 && (
        <div className="search-result">
          {searchData.map((data, i) => (
            <Link key={i} to={`/${data.media_type}/${data.id}`}>
              <p key={i} onClick={resetInputValue}>
                {data.name || data.original_title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
