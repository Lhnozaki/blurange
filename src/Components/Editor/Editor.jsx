import React from 'react';
import Timeline from '../Timeline';
import styles from './Editor.module.scss';

const Editor = () => {
    return (
        <div className={styles.editor}>
            <Timeline />
            this is the editor
        </div>
    )
}

export default Editor;