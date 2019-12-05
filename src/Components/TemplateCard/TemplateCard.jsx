import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TemplateCard.module.scss';

const TemplateCard = ({ template, idx }) => {
    return (
        <Link className={styles.templateCard} to={`/${template}`}>
            <div className="card">
                <h3 className="color-blue">
                    template <span>{idx + 1}</span>
                </h3>
            </div>
        </Link>
    )
}

export default TemplateCard;