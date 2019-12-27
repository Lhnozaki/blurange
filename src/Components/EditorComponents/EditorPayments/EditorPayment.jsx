import React, { useState } from 'react'
import styles from './EditorPayments.module.scss';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';
import PlanCard from '../../PlanCard';


const EditorPayments = () => {
    const [showPay, setShowPay] = useState(false);
    const [isMonthly, setMonthly] = useState(false);
    const [currentPlan, setCurrentPlan] = useState('Starter');

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
                <PlanCard setShowPay={setShowPay} setCurrentPlan={setCurrentPlan} showPay={showPay} isMonthly={isMonthly} title="Starter" monthly="Free" yearly="Free" content={['Create sites using prebuilt templates', 'Hosting with nocann subdomain', 'Pay as you grow']}/>
                <PlanCard setShowPay={setShowPay} setCurrentPlan={setCurrentPlan} showPay={showPay} isMonthly={isMonthly} title="Pro" monthly="$10 paid monthly" yearly="$7 a month paid annually" content={['Everything in starter','Custom Domains' ,'Priority suppport']}/>
                <PlanCard setShowPay={setShowPay} setCurrentPlan={setCurrentPlan} showPay={showPay} isMonthly={isMonthly} title="Drip" monthly="$10000 paid monthly" yearly="$15 a month paid annually" content={['Costs more', 'Bragging rights for expensive plan', 'Custom templates']}/>
            </div>
            {showPay && <Payment setShowPay={setShowPay} showPay={showPay} currentPlan={currentPlan} />}
            <div className="editor-button-container">
                <button><Link to="/editor/info">go back</Link></button>
                <button><Link to="/editor/deploy">continue</Link></button>
            </div>

        </div >
    )
}

export default EditorPayments;