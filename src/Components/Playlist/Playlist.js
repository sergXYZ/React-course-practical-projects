import React from "react";
import styles from './Playlist.module.css';
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  function handleNameChange(event) {
    props.onNameChange(event.target.value);
  };
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist userSearchResults={props.playlistTracks} isRemoval={false} onRemove={props.onRemove}/>
      <button className={styles["Playlist-save"]} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;