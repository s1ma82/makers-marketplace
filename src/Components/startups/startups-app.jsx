import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../redux/actions';
import GridApp from './grid/grid-app';
import ModalComp from './modal/modal-comp';
import SliderApp from './slider/slider-app';
import styles from './startups-app.module.scss'


const StartupsApp = ({params}) => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const [gridActive, setGridActive] = useState(false)
    const arrow = (
        <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.30212 12.2236L14.0111 3.51314C14.4732 3.05175 14.4732 2.30262 14.0111 1.84055L13.1749 1.00417C12.713 0.542435 11.9644 0.542435 11.5025 1.00417L1.11973 11.3874C0.658006 11.8491 0.658006 12.5979 1.11973 13.06L11.5025 23.4427C11.9644 23.9046 12.713 23.9046 13.1749 23.4427L14.0111 22.6065C14.4732 22.1444 14.4732 21.3953 14.0111 20.9339L5.30212 12.2236Z" fill="white"/>
        </svg>
    )
    const arrowTransform = gridActive ? {transform: 'rotate(90deg)'} : {transform: 'rotate(-90deg)'}

    return (
            <div id={styles.startups}>
                <div onClick={e => !e.target.closest('#modal') ? dispatch(hideModal()) : {} }  className={ `${styles.modal_wrapper} ${modal.active ? styles.modal_wrapper_active : ''}` }>
                    <ModalComp/>
                </div>
                <SliderApp params = {params} active = { gridActive ? false : true}/>
                <GridApp params={params} active = {gridActive ? true : false}/>
                <button 
                    className={styles.arrow}
                    style={arrowTransform} 
                    onClick={() => gridActive ? setGridActive(false) : setGridActive(true)}
                >{arrow}
                </button>
            </div>
    );
}

export default StartupsApp;
