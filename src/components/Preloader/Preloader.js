import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.carousel}></div>
        </div>
    );
};

export default Preloader;