import React, { useState } from 'react';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';
import styles from './EditorDeploy.module.scss';

const EditorDeploy = () => {

    return (
        <div id={styles.editorDeploy} className="container-lg">
            <h2 className="editor-title">Editor Deploy</h2>
            <button>deploy</button>
            <div className="editor-button-container">
                <button><Link to="/editor/payments">go back</Link></button>
            </div>

        </div>
    )
}

export default EditorDeploy;