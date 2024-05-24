/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import "./searchBar.css"

const SearchBar = () => {
    return(
        <div className="search_box">
            <input type="text" placeholder="Search..." />
            <a href="">
                <FaSearchLocation className="search-icon"/>
            </a>
        </div>
    )
}

export default SearchBar