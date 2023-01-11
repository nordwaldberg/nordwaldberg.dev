import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navLink}>
                {/*<div className={styles.logo}></div>*/}
                <NavLink to={'/'}>NORDWALDBERG</NavLink>
            </div>
            <div className={styles.navLink}>
                <NavLink to={'/about'}>ABOUT ME</NavLink>
            </div>
        </div>
    );
};

export default Header;