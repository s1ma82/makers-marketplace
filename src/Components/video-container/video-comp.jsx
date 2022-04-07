import React from 'react';
import styles from './video.module.scss'

const VideoComp = () => {
    return (
        <div className={`${styles.video_wrapper}`}>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/p94QPaI4SxE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default VideoComp;
