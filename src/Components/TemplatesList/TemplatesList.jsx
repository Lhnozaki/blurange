import React from "react";
import { Link } from "react-router-dom";
import styles from "./TemplatesList.module.scss";

const TemplatesList = () => {
  const arrTemplateNames = [
    'ATemplate1',
    'ATemplate2',
    'DTemplate1',
    'DTemplate2',
    'JTemplate1',
    'JTemplate2',
    'KTemplate1',
    'KTemplate2',
    'LTemplate1',
    'LTemplate2'
  ];
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
              {arrTemplateNames.map((template, idx) => {
                return (
                  <Link to={`/${template}`}>
                    <div className="card">
                      <h3 className="color-blue">
                        template <span>{idx + 1}</span>
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className={styles.cardContainer}>
              <Link to="/ATemplate1">
                <div className="card">
                  <h3 className="color-blue">template2</h3>
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
