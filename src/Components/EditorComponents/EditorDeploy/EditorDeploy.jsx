import React, { useState } from 'react';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';
import styles from './EditorDeploy.module.scss';

const EditorDeploy = () => {
    const [showPay, setShowPay] = useState(false);
 
    return (
        <div id={styles.editorDeploy} className="container-sm">
            <div>Editor Deploy</div>
            {showPay && <Payment setShowPay={setShowPay} showPay={showPay} />}
            <button>deploy</button>
            <button onClick={() => setShowPay(!showPay)}>pay</button>
            <div className="editor-button-container">
                <button><Link to="/editor/info">go back</Link></button>
            </div>

        </div>
    )
}

export default EditorDeploy;