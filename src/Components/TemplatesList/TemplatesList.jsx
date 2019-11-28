import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TemplatesList.module.scss';

const TemplatesList = () => {
  return (
    <article className="container">
      <section id={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            <span className="color-light-blue">Temp</span>
            <span className="color-orange">lates</span>
          </h1>
          <h3>Choose your template</h3>
          <section id={styles.aboutContent}>
            <div className={styles.cardContainer}>
              <Link to="/JTemplate1">
                <div className="card">
                  <h3 className="color-blue">template1</h3>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};

export default TemplatesList;
