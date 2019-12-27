import React from 'react';
import styles from './DeployProgress.module.scss';

const DeployProgress = ({ projectName, setShowDeployProgress }) => {
    return (
        <div className={styles.deployProgress}>
            <div id={styles.deployContainer} className="card">
                <div className={styles.progressBar}></div>
                <h4 className={styles.deployMessage}>Deploying your site give us a couple seconds (hours)</h4>
                <div className={styles.deployLink}>
                    <span>Your site is deployed at <a target="_blank" href={`https://${projectName}.nocan.design`}>https://{projectName}.nocan.design</a></span>
                    <button onClick={() => setShowDeployProgress(false)}>done</button>
                </div>
            </div>
        </div>
    )
}

export default DeployProgress;