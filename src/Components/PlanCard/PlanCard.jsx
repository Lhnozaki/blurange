import React from 'react';
import styles from './PlanCard.module.scss';

const PlanCard = ({ title, monthly, yearly, isMonthly, setShowPay, showPay, setCurrentPlan, content }) => {
    function togglePay(){
        setCurrentPlan(title)
        setShowPay(!showPay);
    }

    return <div id={styles.planCard} className="card">
        <h3 id={styles.planCardTitle} className="title">{title}</h3>
        <div className={styles.content}>
            <ul>
            {
                content.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }
            </ul>
            {!isMonthly && <p className={styles.savings}>save 20%</p>}
            <h5 className={styles.price}>{isMonthly ? monthly : yearly}</h5>
        </div>
        <button onClick={togglePay}>choose plan</button>
    </div>
}

export default PlanCard;