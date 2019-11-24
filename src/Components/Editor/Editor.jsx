import React from 'react';
import styles from './Editor.module.scss';
import Timeline from '../Timeline';
import Sidebar from '../Sidebar';
import EditorView from '../EditorView';

const Editor = () => {
    return (
        <div className={styles.editor}>
            <Timeline />
            <Sidebar />
            <EditorView />
        </div>
    )
}

export default Editor;