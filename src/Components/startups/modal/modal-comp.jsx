import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../../redux/actions';
import styles from './modal-comp.module.scss'

const ModalComp = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    if(modal.hasOwnProperty('obj')){
        const {title, descr, users, price, mrr} = modal.obj
        return (
            <div id='modal' className={styles.modal}>
                <div className={styles.content}></div>
                <div className={styles.info}>
                    <h1 className={styles.price}>{price}</h1>
                    <div className={styles.info_item}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.descr}>{descr}</p>
                    </div>
                    <div className={styles.info_stats}>
                        <div className={styles.info_stats_item}>
                            <span>{users}</span>
                            <p>users</p>
                        </div>
                        <div className={styles.info_stats_item}>
                            <span>{mrr}</span>
                            <p>mrr</p>
                        </div>
                        <div className={styles.info_stats_item}>
                            <span>{price}</span>
                            <p>price</p>
                        </div>
                    </div>
                    <button id='hidemodalBtn' className={styles.modal_hidebtn} onClick={() => dispatch(hideModal())}>X</button>
                    <div className={styles.info_item}>
                        <button className={styles.btn}><span>Buy now</span></button>
                    </div>
                </div> 
            </div>
        );
    } else {
        return null
    }
}

export default ModalComp;
