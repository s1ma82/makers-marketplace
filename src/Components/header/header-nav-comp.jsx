import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavComp = () => {
    return (
        <ul className='nav_list'>
            <li ><Link className='link' to='/makers-marketplace/about'>About</Link></li>
            <li ><Link className='link' to='/makers-marketplace/community'>Community</Link></li>
        </ul>
    );
}

export default HeaderNavComp;
