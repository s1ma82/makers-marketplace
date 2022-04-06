import React from 'react';
import { Link } from 'react-router-dom';
import styles from './btn.module.scss'

const BtnComp = ({text}) => <Link className={styles.btn} to ='/community'>{text}</Link>

export default BtnComp
