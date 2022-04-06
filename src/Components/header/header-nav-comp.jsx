import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavComp = () => {
    return (
        <ul className='nav_list'>
            <li ><Link className='link' to='/about'>About</Link></li>
            <li ><Link className='link' to='/community'>Community</Link></li>
        </ul>
    );
}

export default HeaderNavComp;
