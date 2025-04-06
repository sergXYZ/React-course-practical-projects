import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResult/SearchResult";
import Playlist from "../Playlist/Playlist";

function App () {
  // eslint-disable-next-line
  const[searchResults, setSearchResults] = useState(
   [ {
      name: "example track name 1",
      artist: "example track artist 1",
      album: "example track album 1",
      id: 1
    },
    {
      name: "example track name 2",
      artist: "example track artist 2",
      album: "example track album 2",
      id: 2
    }]
  );
  const[playlistName, setPlaylistName] = useState('Random playlist name');
const[playlistTracks, setPlaylistTtracks] = useState([
  {
    name: "example playlist name 1",
    artist: "example playlist artist 1",
    album: "example playlist album 1",
    id: 1
  },
  {
    name: "example playlist name 2",
    artist: "example playlist artist 2",
    album: "example playlist album 2",
    id: 2
  },
  {
    name: "example playlist name 3",
    artist: "example playlist artist 3",
    album: "example playlist album 3",
    id: 3
  }
  

]);

function addTrack(track) {
const existingTrack = playlistTracks.find((t) => t.id === track.id);
const newTrack = playlistTracks.concat(track);
if(existingTrack) {
  console.log(`Track ${existingTrack} is already in a playlist!`)
} else {
  setPlaylistTtracks(newTrack);
}
};

    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['App-playlist']}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResult={searchResults}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;