import React from 'react';
import styles from './Dashboard.module.scss';
import DashboardProject from '../DashboardProject';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.container}>
                <h2>Profile</h2>
                <div className={styles.projectCollection}>
                    <DashboardProject />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;