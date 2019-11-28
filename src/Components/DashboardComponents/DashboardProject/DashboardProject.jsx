import React from 'react';
import styles from './DashboardProject.module.scss';

const DashboardProject = ({ projectTitle, projectTemplate, projectImage }) => {
    return (
        <div id={styles.dashboardProject} className="card">
            <h3>Project 1</h3>
            <div className={styles.projectInfo}>
                <div className={styles.infoImg}>
                    <img src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="template view" className="full-img" />
                </div>
                <h4>Template: OG Drip</h4>
                <button>Edit</button>
                <button className="alt-btn">View Demo</button>
            </div>
        </div>
    )
}

export default DashboardProject;