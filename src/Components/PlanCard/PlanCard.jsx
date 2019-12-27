import React from 'react';
import styles from './PlanCard.module.scss';

const PlanCard = ({ title, monthly, yearly, isMonthly }) => {
    return <div id={styles.planCard} className="card">
        <h3 id={styles.planCardTitle} className="title">{title}</h3>
        <h5 className={styles.price}>{isMonthly ? `${monthly} paid monthly` : `${yearly} a month paid anually`}</h5>
        {!isMonthly && <p className={styles.savings}>save 20%</p>}
    </div>
}

export default PlanCard;