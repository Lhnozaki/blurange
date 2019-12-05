import React from 'react';
import styles from './EditorView.module.scss';
import EditorTemplates from '../EditorTemplates';
import EditorInfo from '../EditorInfo';
import EditorDeploy from '../EditorDeploy';

const EditorView = ({ editorStatus }) => {
    function renderEditorStatus() {
        if (editorStatus === 0) {
            return <EditorTemplates />;
        } else if (editorStatus === 1) {
            return <EditorInfo />
        } else {
            return <EditorDeploy />
        }
    }

    return (
        <div id={styles.editorView}>
            {renderEditorStatus()}
        </div>
    )
}

export default EditorView;