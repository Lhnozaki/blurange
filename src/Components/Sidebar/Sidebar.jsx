import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from "react-router-dom";

const Sidebar = ({ setEditorStatus }) => {
    function changeStatus(e) {
        setEditorStatus(e)
    }

    return (
        <div id={styles.sidebar} className="card">
            <h3 onClick={() => changeStatus(0)} to="/editor/templates">1. Choose a template</h3>
            <h3 onClick={() => changeStatus(1)} to="/editor/info">2. Load in your info</h3>
            <h3 onClick={() => changeStatus(2)} to="/editor/deploy">3. Deploy your site</h3>
        </div>
    )
}

export default Sidebar;