import React, { useState } from 'react'
import styles from './EditorPayments.module.scss';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';
import PlanCard from '../../PlanCard';

const EditorPayments = () => {
    const [showPay, setShowPay] = useState(false);
    const [isMonthly, setMonthly] = useState(false);

    const orange = '#ffb43d';
    const blue = '#0468b7';

    return (
        <div id={styles.editorPayments} className="container-lg">
            <h2 className="editor-title">Choose a plan</h2>
            <div className={styles.paymentOptions}>
                <button style={{ background: isMonthly ? blue : orange }} onClick={() => setMonthly(false)} className={styles.paymentButton}>yearly</button>
                <button style={{ background: isMonthly ? orange : blue }} onClick={() => setMonthly(true)} className={styles.paymentButton}>monthly</button>
            </div>
            <div id={styles.planCards} className="auto-grid grid-gap-lg">
                <PlanCard isMonthly={isMonthly} title="Starter" monthly="$5" yearly="$3" />
                <PlanCard isMonthly={isMonthly} title="Pro" monthly="$10" yearly="$7" />
                <PlanCard isMonthly={isMonthly} title="Drip" monthly="$4000" yearly="$15" />
            </div>
            {showPay && <Payment setShowPay={setShowPay} showPay={showPay} />}
            <button onClick={() => setShowPay(!showPay)}>pay</button>
            <div className="editor-button-container">
                <button><Link to="/editor/info">go back</Link></button>
                <button><Link to="/editor/deploy">continue</Link></button>
            </div>

        </div >
    )
}

export default EditorPayments;