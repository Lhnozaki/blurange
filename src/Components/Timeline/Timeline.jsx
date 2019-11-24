import React from 'react';
import styles from './Timeline.module.scss'

const Timeline = ({ editorStatus }) => {
    function setProgress() {
        if (editorStatus === 0) {
            return { transform: 'scaleY(0.33)' }
        } else if (editorStatus === 1) {
            return { transform: 'scaleY(0.66)' }
        } else {
            return { transform: 'scaleY(1)' }
        }
    }

    function setPercentFinished() {
        if (editorStatus === 0) {
            return '33'
        } else if (editorStatus === 1) {
            return '66'
        } else {
            return '100'
        }
    }

    return (
        <div className={styles.timeline}>
            <p>You're {setPercentFinished()}% finished</p>
            <div style={setProgress()} className={styles.progressBar}></div>
        </div>
    )
}

export default Timeline;