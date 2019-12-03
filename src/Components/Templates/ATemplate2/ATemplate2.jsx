import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./ATemplate2.module.scss";

export default function ATemplate2() {
  return (
    <div id={styles.container} className="templateWrapper">
      <div className={styles.menu}>
        <button className={styles.menuBtn}>></button>
        <div className={styles.menuContent}>
          <Link to="/templates">Go back</Link>
          <Link to="/">Contact Me</Link>
          <Link to="/">GitHub</Link>
          <Link to="/">LinkedIn</Link>
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slide} id={styles.slide1}>
          <h1>Hi, my name is Andrew.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque
            recusandae inventore ad ex, voluptatibus laborum, voluptas tempora
            vitae possimus architecto et eum hic rerum enim quia ullam eaque id.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At error
            quis autem sunt quos aliquam ipsam molestiae ex veniam, voluptas,
            dignissimos ad dolorum. Labore incidunt pariatur, inventore commodi
            amet molestias!
          </p>
        </div>
        <div className={styles.slide} id={styles.slide2}>
          <h1>Work Experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos voluptate ex dicta ipsam culpa totam excepturi? Quam
            modi mollitia nisi distinctio. Assumenda atque labore, tempora
            quaerat aut sunt iusto. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Libero sequi explicabo aliquam cumque corporis
            odio reiciendis, est reprehenderit molestias, maiores nulla! Soluta
            corporis fuga hic ipsam nihil maiores sunt. Laborum?
          </p>
        </div>
        <div className={styles.slide} id={styles.slide3}>
          <h1>Education</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            provident vitae nemo quo dolore ipsum velit alias deserunt, aliquid,
            repudiandae illo blanditiis inventore sunt corrupti, unde a! Veniam,
            modi minus!
          </p>
        </div>
        <div className={styles.slide} id={styles.slide4}>
          <h1>Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quam natus temporibus. Asperiores incidunt similique nam temporibus
            architecto! Mollitia tempore voluptate ab similique quisquam soluta
            vero enim, rerum corporis velit. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Adipisci inventore commodi nisi sed
            eligendi magni repellat possimus, iure quos! Id tenetur commodi
            nulla, necessitatibus nam optio quae natus odit veritatis.
          </p>
        </div>
        <div className={styles.slide} id={styles.slide5}>
          <h1>Projects</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fuga,
            exercitationem illo beatae amet facere magnam laudantium debitis!
            Voluptatum at quia, commodi hic quod saepe libero iusto quisquam non
            quis!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, eum porro itaque nulla impedit repellat ex a mollitia
            neque reiciendis exercitationem optio sint. Fuga repudiandae fugit
            quibusdam laudantium quasi perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            voluptatum voluptatem et reiciendis nemo, cum tempora, asperiores
            aliquam, explicabo eum pariatur. Temporibus a possimus nobis
            doloribus, ratione recusandae. Ad, error?
          </p>
        </div>
      </div>
    </div>
  );
}
