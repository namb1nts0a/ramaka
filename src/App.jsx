import React from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchBar/SearchBar";
import Maps from "./components/maps/Maps";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <div className="main-content">
          <SearchBar/>
          <Maps/>
        </div>
      </div>
    </>
  );
}

export default App;
