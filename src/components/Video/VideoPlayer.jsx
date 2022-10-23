import React from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css"

function VideoPlayer(props) {

  return (
    <div className={styles.video}>
      <ReactPlayer style={{ width: '840px', height: '560px'}} url={props.src} controls className={styles.player} />
    </div>
  );
}

export default VideoPlayer;
