import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss'
import {HomeIcon, TagsIcon, CoffeeIcon, MessIcon} from './nav-icons-comp'
import { useDispatch, useSelector } from 'react-redux';
import { activeNavItem } from '../../redux/actions';

const NavComp = () => {
    // const [navIconsActive, setNavIconsActive] = useState({homeActive: true})
    const [burgerActive, setBurgerActive] = useState(false);
    const state = useSelector(state => state.nav) 
    const dispatch = useDispatch()
    document.addEventListener("DOMContentLoaded", () => {
        if(document.location.hash === "#/messanger"){
            dispatch(activeNavItem({mess: true}))
        }else if (document.location.hash === "#/coffee"){
            dispatch(activeNavItem({coffee: true}))
        }else if(document.location.hash === "#/tags"){
            dispatch(activeNavItem({tags: true}))
        }
    })

    if(burgerActive){
        document.addEventListener('click', e => {
            if(!e.target.closest('nav')){
                setBurgerActive(false)
            }
        })
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
            <Link className={styles.link} onClick={() => dispatch(activeNavItem({home: true}))}   to='/'><HomeIcon active={state.home}/></Link>
            <Link className={styles.link} onClick={() => dispatch(activeNavItem({mess: true}))}   to='/messanger'><MessIcon active={state.mess}/></Link>
            <Link className={styles.link} onClick={() => dispatch(activeNavItem({coffee: true}))} to='/coffee'><CoffeeIcon active={state.coffee}/></Link>
            <Link className={styles.link} onClick={() => dispatch(activeNavItem({tags: true}))}   to='/tags'><TagsIcon active={state.tags}/></Link>

            <div id={styles.burger} className={checkActive()} onClick={onBurgerClick}><span></span></div>
        </nav>
    );
}

export default NavComp;
