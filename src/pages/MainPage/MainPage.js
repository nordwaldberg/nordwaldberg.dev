import React from 'react';
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blob}></div>
            <div className={styles.mainContent}>
                <span className={styles.greeting}>
                    Hi! <br/>
                    I'm nordwaldberg
                </span>
                <span className={styles.greetingSubText}>Frontend Developer</span>
            </div>
            <div className={styles.socialLinks}>
                <a className={`${styles.link} ${styles.telegram}`}
                   href="https://t.me/nordwaldberg"
                   target="_blank"
                   rel="noreferrer noopener"
                ></a>
                <a className={`${styles.link} ${styles.gmail}`}
                   href="mailto:nord.waldberg@gmail.com"
                   target="_blank"
                   rel="noreferrer noopener"
                ></a>
                <a className={`${styles.link} ${styles.github}`}
                      href="https://github.com/nordwaldberg"
                      target="_blank"
                      rel="noreferrer noopener"
                ></a>
                <a className={`${styles.link} ${styles.linkedin}`}
                   href="https://www.linkedin.com/in/nordwaldberg/"
                   target="_blank"
                   rel="noreferrer noopener"
                ></a>
                <a className={`${styles.link} ${styles.instagram}`}
                   href="https://www.instagram.com/nordwaldberg.dev/"
                   target="_blank"
                   rel="noreferrer noopener"
                ></a>
            </div>
        </div>
    );
};

export default MainPage;