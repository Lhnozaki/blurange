import React from 'react';
import Timeline from '../Timeline';
import Sidebar from '../Sidebar';
import styles from './Editor.module.scss';

const Editor = () => {
    return (
        <div className={styles.editor}>
            <Timeline />
            <Sidebar />
            this is the editor
        </div>
    )
}

export default Editor;