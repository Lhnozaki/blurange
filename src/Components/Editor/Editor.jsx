import React, { useState } from 'react';
import styles from './Editor.module.scss';
import Timeline from '../Timeline';
import Sidebar from '../Sidebar';
import EditorView from '../EditorView';

const Editor = () => {
    const [editorStatus, setEditorStatus] = useState(0);

    return (
        <div className={styles.editor}>
            <Timeline />
            <Sidebar setEditorStatus={setEditorStatus} />
            <EditorView editorStatus={editorStatus} />
        </div>
    )
}

export default Editor;