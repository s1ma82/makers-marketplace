import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../redux/actions';
import styles from './slide.module.scss'

const SlideComp = ({param}) => {
    const {title, descr = null, users, mrr, price} = param
    const dispatch = useDispatch()
    return (
        <li className={styles.slide} onClick={() => dispatch(showModal(param))}>
            <div className={styles.content}>
                <h1 className={styles.content_title}>{title}</h1>
                <p className={styles.content_descr}>{descr}</p>
            </div>
            <div className={styles.info}>
                <div className={styles.info_item}>
                    <p>users</p>
                    <span>{users}</span>
                </div>
                <div className={styles.info_item}>
                    <p>mrr</p>
                    <span>{mrr}</span>
                </div>
                <div className={styles.info_item} style={{gridArea: '2 / 1 / 3 / 3'}}>
                    <p>price</p>
                    <span>{price}</span>
                </div>
            </div>
        </li>
    );
}

export default SlideComp;
