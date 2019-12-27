import React, { useState } from 'react'
import styles from './EditorPayments.module.scss';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';

const EditorPayments = () => {
    const [showPay, setShowPay] = useState(false);

    return (
        <div id={styles.editorPayments} className="container-sm">
            <h2 className="editor-title">Choose a plan</h2>
            {showPay && <Payment setShowPay={setShowPay} showPay={showPay} />}
            <button onClick={() => setShowPay(!showPay)}>pay</button>
            <div className="editor-button-container">
                <button><Link to="/editor/info">go back</Link></button>
                <button><Link to="/editor/deploy">continue</Link></button>
            </div>

        </div>
    )
}

export default EditorPayments;