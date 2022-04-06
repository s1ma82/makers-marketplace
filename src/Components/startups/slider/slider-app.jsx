import React, {useState} from 'react';
import SlideComp from './slide-comp';
import styles from './slider.module.scss'

const SliderApp = ({params, active}) => {
    const [sliderTranslate, setSliderTranslate] = useState(0)
    const [prefBtnActive, setPrefBtnActive] = useState(false)
    const [nextBtnActive, setNextBtnActive] = useState(true)
    const maxSliderTranslate = -(params.length * 345)
    const arrow = (
        <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.30212 12.2236L14.0111 3.51314C14.4732 3.05175 14.4732 2.30262 14.0111 1.84055L13.1749 1.00417C12.713 0.542435 11.9644 0.542435 11.5025 1.00417L1.11973 11.3874C0.658006 11.8491 0.658006 12.5979 1.11973 13.06L11.5025 23.4427C11.9644 23.9046 12.713 23.9046 13.1749 23.4427L14.0111 22.6065C14.4732 22.1444 14.4732 21.3953 14.0111 20.9339L5.30212 12.2236Z" fill="white"/>
        </svg>
    )
    const activeClass = active ? styles.active : ''

    function setActive(btn){
        if(btn === 'pref'){
            if(prefBtnActive){
                return styles.active
            } else {
                return 
            }
        }
        if(btn === 'next'){
            if(nextBtnActive){
                return styles.active
            } else {
                return
            }
        }
    }

    function onPrefClick(){
        if(sliderTranslate === -345){
            setPrefBtnActive(false)
        }
        if(sliderTranslate === 0){
            return 
        }
        setNextBtnActive(true)
        const translate = sliderTranslate + 345
        setSliderTranslate(translate)

    }
    function onNextClick(){
        if(sliderTranslate === maxSliderTranslate + 690){
            setNextBtnActive(false)
        }
        if(sliderTranslate === (maxSliderTranslate + 345)){
            return
        }
        setPrefBtnActive(true)
        const translate = sliderTranslate - 345
        setSliderTranslate(translate)
    }


    return (
        <div className={`${styles.slider_container} ${activeClass}`} style={{position: 'relative'}}>
            <button id='pref' className={`${styles.slider_arrow} ${styles.arrow_pref} ${setActive('pref')}`} onClick={onPrefClick}>{arrow}</button>
            <div className={styles.slider_wrapper} >
                <ul className={styles.slider} style={{transform: `translateX(${sliderTranslate}px)`}}>
                    {params.map( param => <SlideComp param={param} key={`${param.id}-sliderItem`}/>)}
                </ul>
            </div>
            <button id='next' className={`${styles.slider_arrow} ${styles.arrow_next} ${setActive('next')}`} onClick={onNextClick}>{arrow}</button>
        </div>
    );
}

export default SliderApp;
