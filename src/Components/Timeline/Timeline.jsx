import React from 'react';
import styles from './Timeline.module.scss'

const Timeline = () => {
    return (
        <div className={styles.timeline}>
            <p>You're 50% finished</p>
            <div className={styles.progressBar}></div>
        </div>
    )
}

export default Timeline;