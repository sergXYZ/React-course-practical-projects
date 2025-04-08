import React from "react";
import styles from "./SearchResult.module.css";
import TrackList from "../TrackList/TrackList";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
        {/* <!-- Add a TrackList component --> */}
        <TrackList userSearchResults={props.userSearchResult} isRemoval={true} onAdd={props.onAdd}/>
      </div>
        );
}

export default SearchResults;