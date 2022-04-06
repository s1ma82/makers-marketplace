import React from 'react';
import styles from './title.module.scss'


const TitleComp = ({text}) => <h1 className={styles.title}>{text}</h1>

export default TitleComp;
