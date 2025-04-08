import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar (props) {
  const [term, setTerm] = useState("");
  
  function passTerm() {
    props.onSearch(term);
  };
  function handleTermChange(event) {
    setTerm(event.target.value)
  }

    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={handleTermChange}
        />
        <button className="SearchButton" onClick={passTerm}>
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;