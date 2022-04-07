import React from 'react';
import styles from './made-by-style.module.scss'

const MadeByComp = () => {
    return (
        <a className={styles.madeBy} href="https://fajarsiddiq.com/" target='_blank'>
            <img src={require("./MadeBy.png")} alt="Made by"/>
        </a>
    );
}

export default MadeByComp;
