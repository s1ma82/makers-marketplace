import React from 'react';
import GridItemComp from './grid-item-comp';
import styles from './grid-app.module.scss'

const GridApp = ({params, active}) => {
    const activeClass = active ? styles.active : ''
    return (
        <div className={`${styles.grid_container} ${activeClass}`}>
            <div className={`${styles.grid_wrapper} `}>
                <ul className={`${styles.grid}`}>
                    {params.map( param => <GridItemComp param={param} key={`${param.id}-gridItem`}/>)}
                </ul>
            </div>
        </div>
    );
}

export default GridApp;
