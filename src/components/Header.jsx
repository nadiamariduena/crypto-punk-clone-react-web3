import React from "react";

import punkaLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import swithIcon from "../assets/header/theme-switch.png";

//
//
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkaLogo} className="imgBox-punkLogo" alt={punkaLogo} />
      </div>
      {/*
       */}
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt={searchIcon} />
        </div>
        <input className="searchInput" placeholder="Collection, item or user" />
      </div>
      {/*
       */}
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      {/*
       */}

      <div className="headerActions">
        <div className="themeSwithContainer">
          <img src={swithIcon} alt={swithIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
