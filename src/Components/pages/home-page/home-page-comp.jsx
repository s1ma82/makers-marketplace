import React from 'react';
import { startups } from '../../../db/startups';
import BtnComp from '../../big-btn/btn-comp';
import TitleComp from '../../title/title-comp';
import styles from './home-page.module.scss'
import VideoComp from '../../video-container/video-comp';
import StartupsApp from '../../startups/startups-app';
import HeaderComp from '../../header/header-comp'
import MadeByComp from '../../made-by/made-by-comp';
import FooterComp from '../../footer/footer-comp'

const HomePageComp = () => {
    
    return (
        <>  
            <HeaderComp/>
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
            <FooterComp/>
            <MadeByComp/>
        </>
    );
}

export default HomePageComp;
