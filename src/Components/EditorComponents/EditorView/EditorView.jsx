import React, { useState } from 'react';
import styles from './EditorView.module.scss';
import EditorTemplates from '../EditorTemplates';
import EditorInfo from '../EditorInfo';
import EditorDeploy from '../EditorDeploy';
const EditorView = ({ setEditorStatus, editorStatus }) => {

    const [userInfo, setUserInfo] = useState({});

    function handleChange(e, setVal) {
        let { name, value } = e.target
        setVal(value)
        setUserInfo({ ...userInfo, [name]: value });
    }

    function renderEditorStatus() {
        if (editorStatus === 0) {
            return <EditorTemplates setEditorStatus={setEditorStatus} userInfo={userInfo} setUserInfo={setUserInfo} />;
        } else if (editorStatus === 1) {
            return <EditorInfo setEditorStatus={setEditorStatus} handleChange={handleChange} userInfo={userInfo} setUserInfo={setUserInfo} />
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