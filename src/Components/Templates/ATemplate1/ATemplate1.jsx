import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./ATemplate1.module.scss";

export default function ATemplate1() {
  return (
    <div id={styles.container} className="templateWrapper">
      <div className={styles.canvas}>
        <nav className={styles.navigation}>
          <div className="leftHeader">
            <Link to="/templates">Back</Link>
            <Link to="/">Contact Me</Link>
          </div>
          <Link to="/">
            <h1>YOUR NAME HERE</h1>
          </Link>
          <div className="rightHeader">
            <Link to="/">GitHub</Link>
            <Link to="/">LinkedIn</Link>
          </div>
        </nav>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <section>Hi, my name is NAME.</section>
          </div>
          <div className={styles.rightContent}>
            <section>
              1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi dignissimos labore suscipit odit veritatis, nostrum
              molestiae sequi optio corrupti voluptate? Quod qui ut eum
              inventore explicabo, mollitia deserunt natus ducimus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Non ipsa quis illum?
              Amet, omnis? Non maiores ab unde esse a eius eos sit, tenetur
              debitis laborum suscipit nihil aperiam maxime.
            </section>
            <section>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              perferendis maxime, porro eaque iusto sint distinctio adipisci!
              Nulla, porro ab veniam optio quod officia consequatur a explicabo,
              reprehenderit hic ducimus!
            </section>
            <section>
              3. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus magni accusamus aut a beatae officia dicta nihil
              quaerat reprehenderit? Similique excepturi exercitationem
              praesentium ducimus odio ullam obcaecati aperiam laudantium harum.
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
