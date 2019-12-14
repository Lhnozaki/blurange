import React from "react";
import { Link } from "react-router-dom";
import styles from "./TemplatesList.module.scss";

const TemplatesList = () => {
  const arrTemplateNames = [
    'ATemplate1',
    'ATemplate2',
    'DTemplate1',
    'DTemplate2',
    'jtemplate1',
    'JTemplate2',
    'KTemplate1',
    'KTemplate2',
    'LTemplate1',
    'LTemplate2'
  ];
  return (
    <div>
      <article className="container">
        <section id={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              <span className="color-light-blue">Temp</span>
              <span className="color-orange">lates</span>
            </h1>
            <h3>Choose your template</h3>
          </div>
        </section>
        <section id={styles.aboutContent}>
          <div className={styles.cardContainer}>
            {arrTemplateNames.map((template, idx) => {
              return (
                <Link to={`/templates/${template}`} key={idx}>
                  <div className="card">
                    <h3 className="color-blue">
                      template <span>{idx + 1}</span>
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </article>
    </div>
  );
};

export default TemplatesList;
