import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss'
import {HomeIcon, TagsIcon, CoffeeIcon, MessIcon} from './nav-icons-comp'

const NavComp = () => {
    const [navIconsActive, setNavIconsActive] = useState({homeActive: true})
    const [burgerActive, setBurgerActive] = useState(false);
    document.addEventListener("DOMContentLoaded", () => {
        if(document.location.pathname === "/makers-marketplace/messanger"){
            setNavIconsActive({messActive: true})
        }else if (document.location.pathname === "/makers-marketplace/coffee"){
            setNavIconsActive({coffeeActive: true})
        }else if(document.location.pathname === "/makers-marketplace/tags"){
            setNavIconsActive({tagsActive: true})
        }
    })
    

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
            <Link className={styles.link} onClick={() => setNavIconsActive({homeActive: true})}  to='/makers-marketplace/'><HomeIcon active={navIconsActive.homeActive}/></Link>
            <Link className={styles.link} onClick={() => setNavIconsActive({messActive: true})}  to='/makers-marketplace/messanger'><MessIcon active={navIconsActive.messActive}/></Link>
            <Link className={styles.link} onClick={() => setNavIconsActive({coffeeActive: true})}  to='/makers-marketplace/coffee'><CoffeeIcon active={navIconsActive.coffeeActive}/></Link>
            <Link className={styles.link} onClick={() => setNavIconsActive({tagsActive: true})}  to='/makers-marketplace/tags'><TagsIcon active={navIconsActive.tagsActive}/></Link>

            <div id={styles.burger} className={checkActive()} onClick={onBurgerClick}><span></span></div>
        </nav>
    );
}

export default NavComp;
