import React from 'react';
import styles from './EditorView.module.scss';
import EditorTemplates from '../EditorTemplates';

const EditorView = ({ editorStatus }) => {
    function renderEditorStatus() {
        if (editorStatus === 0) {
            return <EditorTemplates />;
        } else if (editorStatus === 1) {
            return <h1>hii</h1>
        } else {
            return <h1>deploy</h1>
        }
    }

    return (
        <div id={styles.editorView}>
            {renderEditorStatus()}
        </div>
    )
}

export default EditorView;