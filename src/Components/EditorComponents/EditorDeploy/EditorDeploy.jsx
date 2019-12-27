import React, { useState } from 'react';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';
import styles from './EditorDeploy.module.scss';

const EditorDeploy = () => {

    return (
        <div id={styles.editorDeploy} className="container-lg">
            <h2 className="editor-title">Editor Deploy</h2>
            <div className={styles.deployContainer}>
                <h3>Custom Domains</h3>
                <p>Must have <strong>Pro</strong> or <strong>Drip</strong> plan to use custom domains</p>
                <div className={styles.customDomainContainer}>
                    <input/>
                    <button>Add new</button>
                </div>
                <h3>SSL</h3>
                <label>How would you like to handle your SSL Certificate?</label>
                <select>
                    <option>Use Blurrange SSL</option>
                    <option>I have my own</option>
                </select>
                <button className={styles.deployButton}>deploy</button>
            </div>
            <div className="editor-button-container">
                <button><Link to="/editor/payments">go back</Link></button>
            </div>

        </div>
    )
}

export default EditorDeploy;