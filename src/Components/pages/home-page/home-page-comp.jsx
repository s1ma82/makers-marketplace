import React from 'react';
import { startups } from '../../../db/startups';
import BtnComp from '../../big-btn/btn-comp';
import TitleComp from '../../title/title-comp';
import styles from './home-page.module.scss'
import VideoComp from '../../video-container/video-comp';
import StartupsApp from '../../startups/startups-app';


const HomePageComp = () => {
    
    return (
        <main className={styles.home}>
            <div className={styles.home__container}>
               {/* <div className={styles.home__container_content}> */}
                <TitleComp text="Makers Marketplace is a community to buy & sell microstartups."/>
                
               {/* </div> */}
               <div className={styles.home__container_video}>
                   <VideoComp/>
               </div>
               <div className={styles.home__container_btn}>
                    <BtnComp text="Join Community" />
                </div> 
            </div>
            <StartupsApp params={startups}/>
        </main>
    );
}

export default HomePageComp;
