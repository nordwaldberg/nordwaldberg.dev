import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <NavLink className={styles.navLink}
                     to={'/'}>
                NORDWALDBERG
            </NavLink>
            <NavLink className={styles.navLink}
                     to={'/about'}>
                ABOUT ME
            </NavLink>
        </div>
    );
};

export default Header;