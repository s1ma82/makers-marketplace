import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss'

const NavComp = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    const icons = {
        home: (
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.svg_color} d="M24.4024 34.1633C27.1355 34.1633 28.502 32.4063 35.5299 25.9641L35.7251 44.1195C35.7251 46.6573 37.9701 48.8048 40.6056 48.8048C42.9482 48.8048 45.4861 46.9502 45.4861 44.1195V20.1075C45.4861 20.1075 42.265 20.8884 39.6295 17.7649C34.5538 22.743 29.8686 18.1554 29.8686 18.1554L24.5 22.9382L19.4243 18.5458C16.2032 20.7908 12.9821 20.7908 9.95621 18.1554C8.00402 19.8147 6.30897 20.3719 3.51398 20.1075V44.1195C3.51398 46.6573 5.759 48.8048 8.39445 48.8048C10.7371 48.8048 13.2749 46.9502 13.2749 44.1195V25.9641C20.3028 32.4063 21.6694 34.1633 24.4024 34.1633Z" fill="#6736DD"/>
                <path className={styles.svg_color_1} d="M0 13.0716L6.63745 5.85657H42.9482L49 13.1691C47.7311 21.554 39.239 16.8741 39.5319 13.0716C39.0438 19.409 30.5518 20.0915 29.6733 13.0716C29.6733 19.409 19.8147 19.994 19.8147 13.0716C19.8147 19.604 9.85857 19.799 9.85857 13.0716C9.85857 19.604 0 20.0915 0 13.0716Z" fill="#12C3F7"/>
                <path className={styles.svg_color} d="M6.63751 1.56175C6.63751 0.699221 7.33673 0 8.19927 0H41.3865C42.2491 0 42.9483 0.699221 42.9483 1.56175V3.70916H6.63751V1.56175Z" fill="#6736DD"/>
            </svg>  
        ),
        mess: (
            <svg width="54" height="42" viewBox="0 0 324 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.svg_color} d="M234 90C234 40.2919 181.62 0 117 0C52.38 0 0 40.2919 0 90C0 109.277 7.94813 127.097 21.3581 141.739C13.8431 158.749 1.4175 172.215 1.2375 172.406C0.631816 173.044 0.226507 173.846 0.0717474 174.712C-0.0830122 175.578 0.0195734 176.47 0.366805 177.278C0.714036 178.086 1.29067 178.775 2.02531 179.259C2.75995 179.743 3.62036 180 4.5 180C25.0763 180 42.1481 173.109 54.4106 165.949C72.5231 174.802 93.9488 180 117 180C181.62 180 234 139.708 234 90ZM108 144V134.837C101.649 134.511 95.4731 132.294 90.3544 128.452C88.1606 126.804 88.0481 123.519 90.0338 121.624L96.6431 115.318C98.2012 113.833 100.519 113.766 102.341 114.908C104.518 116.269 106.987 117 109.552 117H125.364C129.021 117 132.002 113.67 132.002 109.581C132.002 106.234 129.971 103.286 127.069 102.42L101.756 94.8262C91.2994 91.6875 83.9925 81.6525 83.9925 70.4194C83.9925 56.6269 94.7081 45.4219 107.994 45.0675V36C107.994 33.5137 110.008 31.5 112.494 31.5H121.494C123.981 31.5 125.994 33.5137 125.994 36V45.1631C132.345 45.4894 138.521 47.7 143.64 51.5475C145.834 53.1956 145.946 56.4806 143.961 58.3763L137.351 64.6819C135.793 66.1669 133.476 66.2344 131.653 65.0925C129.476 63.7256 127.007 63 124.442 63H108.63C104.974 63 101.993 66.33 101.993 70.4194C101.993 73.7663 104.023 76.7138 106.926 77.58L132.238 85.1738C142.695 88.3125 150.002 98.3475 150.002 109.581C150.002 123.379 139.286 134.578 126 134.932V144C126 146.486 123.986 148.5 121.5 148.5H112.5C110.014 148.5 108 146.486 108 144ZM302.631 213.744C316.052 199.102 324 181.277 324 162C324 124.346 293.912 92.1375 251.252 78.7106C251.736 82.4231 252 86.1862 252 90C252 149.552 191.441 198 117 198C110.936 198 105.007 197.567 99.1519 196.943C116.888 229.292 158.496 252 207 252C230.051 252 251.477 246.802 269.589 237.949C281.852 245.109 298.924 252 319.5 252C321.3 252 322.926 250.926 323.629 249.277C324.343 247.624 324 245.711 322.757 244.401C322.582 244.215 310.146 230.766 302.631 213.744Z" fill="#fff"/>
            </svg>  
        ),
        tags: (
            <svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.svg_color} d="M38.1236 16.7691L21.9014 1.04344C21.2122 0.375342 20.2775 4.94057e-06 19.3028 0H3.675C1.64533 0 0 1.59496 0 3.5625V18.7119C5.09659e-06 19.6567 0.387195 20.5628 1.07639 21.2309L17.2986 36.9566C18.7337 38.3478 21.0606 38.3479 22.4958 36.9566L38.1236 21.8072C39.5588 20.4159 39.5588 18.1603 38.1236 16.7691V16.7691ZM8.575 11.875C6.54533 11.875 4.9 10.28 4.9 8.3125C4.9 6.34496 6.54533 4.75 8.575 4.75C10.6047 4.75 12.25 6.34496 12.25 8.3125C12.25 10.28 10.6047 11.875 8.575 11.875ZM47.9236 21.8072L32.2958 36.9566C30.8607 38.3478 28.5338 38.3478 27.0986 36.9566L27.0711 36.9298L40.3975 24.0114C41.6989 22.7497 42.4156 21.0723 42.4156 19.2881C42.4156 17.5039 41.6989 15.8265 40.3975 14.5648L25.3726 0H29.1028C30.0775 4.94057e-06 31.0122 0.375342 31.7014 1.04344L47.9236 16.7691C49.3588 18.1603 49.3588 20.4159 47.9236 21.8072Z" fill="white"/>
            </svg>

        ),
        coffee: (
            <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_122_17)">
                    <path className={styles.svg_color} d="M14.6999 30H29.3999C33.4577 30 36.7499 26.6406 36.7499 22.5H39.1999C44.6052 22.5 48.9999 18.0156 48.9999 12.5C48.9999 6.98438 44.6052 2.5 39.1999 2.5H9.18739C8.16911 2.5 7.34989 3.33594 7.34989 4.375V22.5C7.34989 26.6406 10.6421 30 14.6999 30ZM39.1999 7.5C41.9026 7.5 44.0999 9.74219 44.0999 12.5C44.0999 15.2578 41.9026 17.5 39.1999 17.5H36.7499V7.5H39.1999ZM42.8519 37.5H3.69786C0.0534804 37.5 -0.972458 32.5 0.941606 32.5H45.6005C47.5146 32.5 46.504 37.5 42.8519 37.5Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_122_17">
                    <rect width="49" height="40" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        )
    }
    function onBurgerClick(){
        if(burgerActive){
            setBurgerActive(false)
        }else{
            setBurgerActive(true)
        }
    }
    function checkActive(){
        if(burgerActive){
            return styles.active
        }else{
            return 
        }
    }
    return (
        <nav className={`${styles.nav} ${checkActive()}`}>
            <Link className={styles.link}to='/makers-marketplace/'>{icons.home}</Link>
            <Link className={styles.link}to='/makers-marketplace/messanger'>{icons.mess}</Link>
            <Link className={styles.link}to='/makers-marketplace/tags'>{icons.tags}</Link>
            <Link className={styles.link}to='/makers-marketplace/coffee'>{icons.coffee}</Link>

            <div id={styles.burger} className={checkActive()} onClick={onBurgerClick}><span></span></div>
        </nav>
    );
}

export default NavComp;
