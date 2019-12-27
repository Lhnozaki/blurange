import React from 'react';
import styles from './PlanCard.module.scss';

const PlanCard = ({ title, monthly, yearly, isMonthly, setShowPay, showPay, setCurrentPlan }) => {
    function togglePay(){
        setCurrentPlan(title)
        setShowPay(!showPay);
    }

    return <div id={styles.planCard} className="card">
        <h3 id={styles.planCardTitle} className="title">{title}</h3>
        <h5 className={styles.price}>{isMonthly ? `${monthly} paid monthly` : `${yearly} a month paid annually`}</h5>
        {!isMonthly && <p className={styles.savings}>save 20%</p>}
        <button onClick={togglePay}>choose plan</button>
    </div>
}

export default PlanCard;