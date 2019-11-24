import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div id={styles.sidebar} className="card">
            <Link to="/editor/templates"><h3>1. Choose a template</h3></Link>
            <Link to="/editor/info"><h3>2. Load in your info</h3></Link>
            <Link to="/editor/deploy"><h3>3. Deploy your site</h3></Link>
        </div>
    )
}

export default Sidebar;