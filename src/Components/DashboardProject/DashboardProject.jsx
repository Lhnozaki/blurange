import React from 'react';
import styles from './DashboardProject.module.scss';

const DashboardProject = ({ projectTitle, projectTemplate, projectImage }) => {
    return (
        <div id={styles.dashboardProject} className="card">
            <h3>{projectTitle}</h3>
            <div className={styles.projectInfo}>
                <div className={styles.infoImg}>
                    <img src={projectImage} alt={projectTitle} className="full-img" />
                </div>
                <h4>Template: {projectTemplate}</h4>
                <button>Edit</button>
                <button className="alt-btn">View Demo</button>
            </div>
        </div>
    )
}

export default DashboardProject;